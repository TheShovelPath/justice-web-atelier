
import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Save, X, Edit } from 'lucide-react';

interface EditableContentProps {
  contentKey: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  children?: React.ReactNode;
}

const EditableContent: React.FC<EditableContentProps> = ({
  contentKey,
  tag = 'p',
  className = '',
  children
}) => {
  const { isAdminMode, editableContent, updateContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(editableContent[contentKey] || '');

  // Si la clé de contenu n'existe pas, utiliser les enfants comme contenu par défaut
  const displayContent = editableContent[contentKey] || (children ? React.Children.map(children, child => 
    typeof child === 'string' ? child : ''
  ).join(' ') : '');

  const handleEdit = () => {
    setTempContent(displayContent);
    setIsEditing(true);
  };

  const handleSave = () => {
    updateContent(contentKey, tempContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const TagComponent = tag;

  if (isAdminMode) {
    if (isEditing) {
      return (
        <div className="relative border-2 border-dashed border-gold p-3 rounded-md bg-white/90 dark:bg-royal-dark/90 shadow-lg">
          {tag === 'p' || tag === 'span' ? (
            <textarea
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
              className="w-full min-h-[100px] p-2 bg-white dark:bg-royal-dark/60 border border-elegant/30 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              autoFocus
            />
          ) : (
            <input
              type="text"
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
              className="w-full p-2 bg-white dark:bg-royal-dark/60 border border-elegant/30 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              autoFocus
            />
          )}
          <div className="flex gap-2 mt-3">
            <Button size="sm" onClick={handleSave} className="flex items-center gap-1 bg-green-600 hover:bg-green-700">
              <Save size={14} /> Enregistrer
            </Button>
            <Button size="sm" onClick={handleCancel} variant="outline" className="flex items-center gap-1">
              <X size={14} /> Annuler
            </Button>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        className={`group relative cursor-pointer border-2 border-dashed border-transparent hover:border-gold hover:bg-yellow-50/20 dark:hover:bg-gold/10 p-1 rounded-sm transition-colors ${className}`}
        onClick={handleEdit}
      >
        <TagComponent className={`${className} relative`}>{displayContent}</TagComponent>
        <div className="absolute top-0 right-0 bg-gold text-white text-xs px-2 py-0.5 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <Edit size={12} /> Éditer
        </div>
      </div>
    );
  }

  return <TagComponent className={className}>{displayContent}</TagComponent>;
};

export default EditableContent;
