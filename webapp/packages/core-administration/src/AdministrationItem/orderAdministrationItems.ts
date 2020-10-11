/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { IAdministrationItem } from './IAdministrationItem';

export function orderAdministrationItems(configuration: boolean) {
  return (itemA: IAdministrationItem, itemB: IAdministrationItem) => {
    if (configuration) {
      return (
        itemA.configurationWizardOptions?.order ?? itemA.order
      ) - (
        itemB.configurationWizardOptions?.order ?? itemB.order
      );
    }
    return itemA.order - itemB.order;
  };
}
