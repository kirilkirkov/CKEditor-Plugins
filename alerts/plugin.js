CKEDITOR.plugins.add('alerts',
        {
            init: function (editor)
            {


                var config = editor.config,
                        lang = editor.lang.format;

                var danger = '<div style="margin:10px 0; padding: 15px;border: 1px solid transparent;border-radius: 4px;color: #a94442;background-color: #f2dede;border-color: #ebccd1;"><strong>Danger!</strong> System state is critical, check the configuration!</div>';

                var success = '<div style="margin:10px 0; padding: 15px;border: 1px solid transparent;border-radius: 4px;color: #3c763d;background-color: #dff0d8;border-color: #d6e9c6;"><strong>Success!</strong> Your request was finished successfully.</div>';

                var info = '<div style="margin:10px 0; padding: 15px;border: 1px solid transparent;border-radius: 4px;color: #31708f;background-color: #d9edf7;border-color: #bce8f1;"><strong>Info.</strong> Here are details for your query.</div>';

                var warning = '<div style="margin:10px 0; padding: 15px;border: 1px solid transparent;border-radius: 4px;color: #8a6d3b;background-color: #fcf8e3;border-color: #faebcc;"><strong>Warning!</strong> Are you sure you want to proceed?</div>';

                var message = '<div style="margin:10px 0; padding: 15px;border: 1px solid transparent;border-radius: 4px;color: #777;background-color: #eee;border-color: #ddd;"><strong>Message.</strong> Lorem ipsum dolor sit amet, consectetur.</div>';

                var tags = [];
                tags[0] = [danger, '<span style="font-size:13px; color:#f83a3a;">Danger</span>', "Danger"];
                tags[1] = [success, '<span style="font-size:13px; color:#298005;">Success</span>', "Success"];
                tags[2] = [info, '<span style="font-size:13px; color:#1789c1;">Info</span>', "Info"];
                tags[3] = [warning, '<span style="font-size:13px; color:#bfa20b;">Warning</span>', "Warning"];
                tags[4] = [message, '<span style="font-size:13px; color:#8b8b8b;">Message</span>', "Message"];

                editor.ui.addRichCombo('alerts',
                        {
                            label: "Insert Alert",
                            title: "Bootstrap Alert Messages",
                            className: 'cke_alerts',
                            multiSelect: false,
                            panel:
                                    {
                                        css: [config.contentsCss, CKEDITOR.getUrl(editor.skinPath + 'editor.css')]
                                    },
                            init: function ()
                            {
                                this.startGroup('<p style="font-size:16px; text-align:center">Select Type</p>');
                                for (var this_tag in tags) {
                                    this.add(tags[this_tag][0], tags[this_tag][1], tags[this_tag][2], tags[this_tag][3], tags[this_tag][4]);
                                }
                            },
                            onClick: function (value)
                            {
                                editor.focus();
                                editor.fire('saveSnapshot');
                                var element = CKEDITOR.dom.element.createFromHtml(value);
                                CKEDITOR.instances.editor1.insertElement(element);
                                editor.fire('saveSnapshot');
                            }
                        });
            }
        });
