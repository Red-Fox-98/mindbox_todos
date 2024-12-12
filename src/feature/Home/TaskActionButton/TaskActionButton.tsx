import Button from 'src/shared/uiKit/Button/Button';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

export type ButtonType = 'all' | 'active' | 'completed' | 'clearCompleted';

interface TaskActionButtonProps {
  type: ButtonType;
  isActive?: boolean;
  onClick?: (nameBtn: ButtonType) => void;
  clearCompleted?: () => void;
}

const TaskActionButton: FC<TaskActionButtonProps> = ({
  type,
  isActive,
  onClick,
  clearCompleted,
}) => {
  const { t } = useTranslation();
  const name = t(`homePage.tasks.${type}`);
  return (
    <Button
      name={name}
      isActive={isActive}
      onClick={() => {
        onClick?.(type);
        clearCompleted?.();
      }}
    />
  );
};

export default TaskActionButton;
