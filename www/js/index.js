/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    init();
}

function init() {
    $("#addTask").click(addTask);
}

function addTask() {
    var newTask = window.prompt("Ingrese una nueva tarea:", "Task: ");

    if (newTask !== null && newTask.trim() !== "") {
        var listItem = $("<li>" + newTask + " <button class='deleteTask' style='float: right;'>X</button></li>");
        
        // Agregar estilo CSS para empujar el botón hacia la derecha
        listItem.find(".deleteTask").css("margin-left", "auto");

        // Asignar un controlador de eventos al botón de eliminación dentro del nuevo elemento
        listItem.find(".deleteTask").on("click", function() {
            // Utilizar .closest() para encontrar el elemento <li> padre y luego .remove() para eliminarlo
            var parentListItem = $(this).closest("li");
            var listId = parentListItem.parent().attr('id');
            parentListItem.remove();
            $("#" + listId).listview("refresh");
        });

        $("ul").append(listItem);
        $("ul").listview("refresh");
    } else {
        console.log("El usuario canceló la operación o no ingresó ninguna tarea.");
    }
}




