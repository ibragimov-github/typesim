import styles from './Header.module.scss';

import { PageHeader } from 'antd';
import { Switch } from 'antd';
import { Select } from 'antd';

export interface IAppProps {
  setSwitchControl: any,
  switchControl: boolean
}


export default function App({setSwitchControl, switchControl}: IAppProps) {
  const onChange = (checked: boolean) => {
    setSwitchControl(checked)
  }

  return (
    <PageHeader>
      <div className={styles.container}>
        <Switch
          onChange={onChange}
          checked={switchControl}
          checkedChildren='ФОКУС'
          unCheckedChildren='ФОКУС'
        />
      </div>
    </PageHeader>
  );
}
