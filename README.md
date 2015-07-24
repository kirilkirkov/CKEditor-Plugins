# CKEditor-Plugins
## What plugins have:
* **Alerts** -  With this plugin you can add bootstrap styled alerts.

## Plugins installation:
1. Copy plugin directory into /ckeditor/plugins/**pluginName**
2. Add this line into **config.js**
 * config.extraPlugins = '**pluginName**';
3. Name of your text area must be in this code into /ckeditor/plugins/**pluginName/plugin.js** 
 * CKEDITOR.instances.editor1.insertElement( element );
   * Where editor1 is name of textarea in your html !... **editor1 is default name. if you can dont change it !**

