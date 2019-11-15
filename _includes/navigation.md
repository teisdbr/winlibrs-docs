<div id="accordion" style="min-width:300px">
    <ul>
        <li>
            <div>LIBRS Specifications</div>
                {% for item in site.data.specnavigation %}
                    {% if forloop.first %}<ul>{% endif %}
                    <li>
                        <div>{{ item.title }}</div>
                        {% for subitem in item.submenu %}
                            {% if forloop.first %}<ul style="padding-left:30px;">{% endif %}
                                <li>
                                {{ subitem.subtitle }}
                                </li>
                                {% if forloop.last %}</ul>{% endif %}
                        {% endfor %}
                    {% if forloop.last %}</ul>{% endif %}
                {% endfor %}
                </li>
            </ul>
        </li>
    </ul>
</div>