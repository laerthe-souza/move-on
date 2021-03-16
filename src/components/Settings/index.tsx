import { useCallback, useState } from 'react';

import { useSettings } from '../../hooks/useSettings';
import SwitchTheme from '../SwitchTheme';

import { Overlay, SettingsModal } from './styles';

export default function Settings(): JSX.Element {
  const { closeModalSettings, appMode, saveChanges } = useSettings();

  const [selectValue, setSelectValue] = useState(appMode);

  const handleClickSaveButton = useCallback(() => {
    saveChanges(selectValue);
  }, [saveChanges, selectValue]);

  return (
    <Overlay onClick={closeModalSettings}>
      <SettingsModal
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 0.4,
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
            onClick={closeModalSettings}
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
  );
}
