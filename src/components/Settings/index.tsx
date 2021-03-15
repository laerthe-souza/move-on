import { useCallback, useState } from 'react';

import { useSettings } from '../../hooks/useSettings';
import SwitchTheme from '../SwitchTheme';

import { Overlay, SettingsModal } from './styles';

interface SettingsProps {
  isShow: boolean;
}

export default function Settings({ isShow }: SettingsProps): JSX.Element {
  const { toggleShowModalSettings, appMode, saveChanges } = useSettings();

  const [selectValue, setSelectValue] = useState(appMode);

  const handleClickSaveButton = useCallback(() => {
    saveChanges(selectValue);
  }, [saveChanges, selectValue]);

  return (
    <>
      {isShow && (
        <Overlay onClick={toggleShowModalSettings}>
          <SettingsModal
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 8,
            }}
            onClick={event => event.stopPropagation()}
          >
            <strong>Configurações</strong>

            <hr />

            <p>
              Modo:
              <select
                defaultValue={appMode}
                onChange={e => setSelectValue(e.target.value)}
              >
                <option value="default">Padrão</option>
                <option value="test">Teste</option>
              </select>
            </p>

            <p>
              Tema: <SwitchTheme />
            </p>

            <div>
              <button
                className="closeButton"
                type="button"
                onClick={toggleShowModalSettings}
              >
                Fechar
              </button>
              <button
                className="saveButton"
                type="button"
                onClick={handleClickSaveButton}
              >
                Salvar
              </button>
            </div>
          </SettingsModal>
        </Overlay>
      )}
    </>
  );
}
