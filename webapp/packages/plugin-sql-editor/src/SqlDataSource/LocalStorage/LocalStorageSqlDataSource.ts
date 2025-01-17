/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2022 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { computed, makeObservable } from 'mobx';

import type { IConnectionExecutionContextInfo } from '@cloudbeaver/core-connections';

import { BaseSqlDataSource } from '../BaseSqlDataSource';
import type { ILocalStorageSqlDataSourceState } from './ILocalStorageSqlDataSourceState';

export class LocalStorageSqlDataSource extends BaseSqlDataSource {
  static key = 'local-storage';

  get script(): string {
    return this.state.script;
  }

  get executionContext(): IConnectionExecutionContextInfo | undefined {
    return this.state.executionContext;
  }

  private readonly state: ILocalStorageSqlDataSourceState;

  constructor(state: ILocalStorageSqlDataSourceState) {
    super();
    this.state = state;
    this.outdated = false;

    makeObservable(this, {
      script: computed,
      executionContext: computed,
    });
  }

  setScript(script: string): void {
    this.state.script = script;
    super.setScript(script);
  }

  setExecutionContext(executionContext?: IConnectionExecutionContextInfo): void {
    this.state.executionContext = executionContext;
  }
}