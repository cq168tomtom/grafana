import { VizPanelPlugin } from '@grafana/ui';

import { TablePanelEditor } from './TablePanelEditor';
import { TablePanel } from './TablePanel';
import { Options, defaults } from './types';

export const plugin = new VizPanelPlugin<Options>(TablePanel).setDefaults(defaults).setEditor(TablePanelEditor);
