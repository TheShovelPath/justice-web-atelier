
import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Save, X } from 'lucide-react';

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

  // If content key doesn't exist, use children as default
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
        <div className="relative border border-dashed border-gold p-2 rounded-md">
          {tag === 'p' || tag === 'span' ? (
            <textarea
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
              className="w-full min-h-[100px] p-2 bg-white dark:bg-royal-dark/60 border border-elegant/30 rounded"
            />
          ) : (
            <input
              type="text"
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
              className="w-full p-2 bg-white dark:bg-royal-dark/60 border border-elegant/30 rounded"
            />
          )}
          <div className="flex gap-2 mt-2">
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
        className={`group relative cursor-pointer border border-transparent hover:border-dashed hover:border-gold hover:bg-yellow-50/10 p-1 rounded-sm transition-colors ${className}`}
        onClick={handleEdit}
      >
        <TagComponent className={className}>{displayContent}</TagComponent>
        <div className="absolute top-0 right-0 bg-gold text-white text-xs px-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Éditer
        </div>
      </div>
    );
  }

  return <TagComponent className={className}>{displayContent}</TagComponent>;
};

export default EditableContent;
