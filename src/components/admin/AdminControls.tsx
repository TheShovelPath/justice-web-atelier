
import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Settings, Lock, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminControls = () => {
  const { isAdminMode, toggleAdminMode } = useAdmin();
  const { toast } = useToast();

  const handleToggleAdmin = () => {
    toggleAdminMode();
    
    if (!isAdminMode) {
      toast({
        title: "Mode administrateur activé",
        description: "Vous pouvez maintenant modifier le contenu en cliquant dessus.",
        variant: "default",
      });
    } else {
      toast({
        title: "Mode administrateur désactivé",
        description: "Les modifications ont été enregistrées.",
        variant: "default",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={handleToggleAdmin}
        className={`flex items-center gap-2 shadow-lg ${isAdminMode ? 'bg-red-500 hover:bg-red-600' : 'bg-royal hover:bg-royal-dark'}`}
        size="lg"
      >
        {isAdminMode ? (
          <>
            <Save size={18} /> Enregistrer les modifications
          </>
        ) : (
          <>
            <Settings size={18} /> Mode éditeur
          </>
        )}
      </Button>
      
      {isAdminMode && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white py-1 px-4 text-center z-50">
          <div className="flex items-center justify-center gap-2">
            <Lock size={16} />
            <span className="font-medium">Mode édition activé - Cliquez sur n'importe quel texte pour le modifier</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminControls;
