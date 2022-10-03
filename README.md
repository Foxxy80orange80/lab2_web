# Лабораторная №2 по Веб-программированию
 ~~Лаба не стала хуже, если бы из нее убрали джаву...~~ 

>Трудности в этой лабе могут быть на 2 этапах: создание папки с лабой и ее запуск. Разберем их по порядку :shipit:

***Инструкция по созданию лабы:***

![image](https://user-images.githubusercontent.com/96020839/190707891-baafd2b2-6110-44c6-9b21-a4b639743d1f.png)
![image](https://user-images.githubusercontent.com/96020839/190707990-5baf4c69-3412-4101-85c6-b119cde41b3e.png)



***Инструкция по запуску лабы:***

1. Скачиваем WildFly: https://www.wildfly.org/downloads/

2. Заходим в командной строке в папку WildFly/bin

3. Запускаем add-user.bat(это нужно для админ-панели), на первый вопрос отвечаем "а", остальные как хотите(!ГЛАВНОЕ! запомните пароли)

4. Переходим в standalone/configuration/standalone.xml

5. В строке 518 (<socket-binding name="http"...) заменяем порт на ваш любимый

6. В строке 480(<host name="default-host" alias="localhost"...) в атрибуты тега добавляем default-web-module="secondLab-1.0-SNAPSHOT.war" , cм *

7. Опять переходим в bin 

8. Запускаем standalone.bat

9. Если все хорошо, то откроется стаковая странтица WildFly

10. Переходим в админ панель по адресу http://localhost:9990

11. Тут вводим логин+пароль из п.3

12. В Deployment нажимаем на плюсик и скидываем свой secondLab-1.0-SNAPSHOT.war*

13. Переходим по ссылке http://localhost:свой_любимый_порт

14. :shipit::shipit::shipit:

15. Профит

Если хотим запускать с IDEA:

0. ПРИМЕЧАНИЕ: лично я запускал с IDEA только после запуска как в 1 варианте, поэтому советую вам сделать так же. Это все равно пригодится при запуске с сервера:shipit:

1. Нажимаем на Run->Edit Configurations

2. Нажимаем на плюсик сверху слева

3. Добавляем JBoss/WildFly Server-> Local

4. Внизу в Build launch добавляем build artifacts и выбираем 2 вариант(это все нужно делать, если в Build launch только 1 строка, если 2-то ничего не надо добавлять).

5. В url пишем http://localhost:свой_любимый_порт/

6. :shipit::shipit::shipit:

7. Profit

*-secondLab-1.0-SNAPSHOT.war-название архива со скомпилированными классами 




![Милый лисенок](https://flyclipart.com/thumb2/silent-fox-on-scratch-342116.png)
