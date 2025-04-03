
import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/ui/button';
import { Settings, Lock } from 'lucide-react';
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
      >
        {isAdminMode ? (
          <>
            <Lock size={16} /> Quitter le mode admin
          </>
        ) : (
          <>
            <Settings size={16} /> Mode administrateur
          </>
        )}
      </Button>
    </div>
  );
};

export default AdminControls;
