import { useState } from "react";

export interface ActionState {
  sectionName: string;
  actionName: string;
}

export function useInventory() {
  const [actions, setActions] = useState<ActionState[]>([]);

  const handleToggleAction = (sectionName: string, actionName: string) => {
    if (actions.some((a) => a.actionName === actionName)) {
      setActions((prev) => prev.filter((a) => a.actionName !== actionName));
    } else {
      setActions((prev) => [...prev, { sectionName, actionName }]);
    }
  };

  const groupActionsBySection = () => {
    const grouped = actions.reduce<Record<string, string[]>>((acc, curr) => {
      if (!acc[curr.sectionName]) {
        acc[curr.sectionName] = [];
      }
      acc[curr.sectionName].push(curr.actionName);
      return acc;
    }, {});

    const result = Object.keys(grouped).map((sectionName) => ({
      sectionName,
      actions: grouped[sectionName],
    }));

    return result;
  };

  return {
    handleToggleAction,
    groupActionsBySection,
    actions,
    isThereAnyAction: actions.length > 0,
  };
}
