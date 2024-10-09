import Graph from "./Graph.mjs";

const socialNetwork = new Graph();

socialNetwork.addCity('Cali');
socialNetwork.addCity('Medellín');
socialNetwork.addCity('España');

socialNetwork.addPerson('Etienne', 13, 'Cali');
socialNetwork.addPerson('Santiago', 25, 'Medellín');
socialNetwork.addPerson('Camila', 21, 'España');
socialNetwork.addPerson('Esteban', 12, 'España');

socialNetwork.addFriend({ name: "Etienne", city: "Cali" }, { name: "Santiago", city: 'Medellín' });
socialNetwork.addFriend({ name: "Etienne", city: "Cali" }, { name: "Camila", city: 'España' });
socialNetwork.addFriend({ name: "Etienne", city: "Cali" }, { name: "Esteban", city: 'España' });

socialNetwork.listResidents('Cali');
socialNetwork.listResidents('España');
socialNetwork.listResidents('Medellín');

socialNetwork.listFriends('Etienne', 'Cali');