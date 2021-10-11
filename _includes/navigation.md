<div id="accordion" style="left:5px; width:325px; height: 100%; position: fixed; overflow-x: hidden;">
    <ul>
        <li>
            <div class="d-flex justify-content-between align-items-center px-2 border-bottom">
                <div class="mr-auto">
                    <a class="no-format font-weight-bold h5" href=".">Home</a>
                </div>
                <div>
                    <i onclick="changeActiveMenuItem(this);document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';"
                        class="fa fa-times fa-2x p-2"
                        style="z-index: 10; padding-top: 11px; padding-left: 5px; padding-right: 5px"></i>
                </div>
            </div>
        </li>
        <li>
            <div>LIBRS Specifications</div>
            {% for item in site.data.specnavigation %}
            {% if forloop.first %}<ul>{% endif %}
                <li>
                    <div>
                        {% if item.url != "" %}<a
                            href="{{ item.url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
                    {% for subitem in item.submenu %}
                    {% if forloop.first %}<ul style="padding-left: 5px;">{% endif %}
                        <li>
                            <a onclick="changeActiveMenuItem(this); document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';"
                                href="{{ subitem.url }}">{% if subitem.de_num != nil%} <table>
                                    <tr
                                        onclick="changeActiveMenuItem(this);document.getElementById('sidebar').style.display = 'none'; document.getElementById('showmenu').style.paddingLeft = 'unset'; document.getElementById('content').style.paddingLeft = 'unset'; document.getElementById('menuiconopen').style.display = 'block';">
                                        <td
                                            style="vertical-align: top; text-align: right; padding-left:0px; padding-right:0px; white-space: nowrap; min-width: 25px">
                                            {{ subitem.de_num }}</td>
                                        <td style="vertical-align: top; padding-left:0px; padding-right:0px;">
                                            &nbsp;-&nbsp;</td>
                                        <td style="vertical-align: top; padding-left:0px;">{{subitem.subtitle}}</td>
                                    </tr>
                                </table>{% else %}{{ subitem.subtitle }}{% endif %}</a>
                        </li>
                        {% if forloop.last %}</ul>{% endif %}
                    {% endfor %}
                    {% if forloop.last %}</ul>{% endif %}
            {% endfor %}
        </li>
        <li><div><a href="./data-element-values"><span style="font-size: large; font-weight: bold;">Data Element Available Values</span></a></div></li>
        <li><div><a href="./lrs-master-list"><span style="font-size: large; font-weight: bold;">Master LRS List</span></a></div></li>
        <li><div><a href="./faq"><span style="font-size: large; font-weight: bold;">LIBRS FAQ</span></a></div></li>
        <li><div><a href="./models"><span style="font-size: large; font-weight: bold;">JSON Models</span></a></div></li>
    </ul>
</div>

