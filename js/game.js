console.log("Welcome to the game!");
console.log(".bash_history - A escape game")
console.log("Made by\n- Valentin Thuillier\n- Anass Azdoufal\n- Théo Engelaere\n- Elise Leroy")
console.log("Si vous voulez tester des commandes, vous pouvez utiliser l'objet 'game' permettant de faire des actions sur le jeu.")


// Récupération des éléments du HTML
const terminalWindow = document.getElementById('terminal-window');
const commandLine = document.getElementById('command-line');
const input = document.getElementsByClassName("input")[0];

// Déclaration des objets du jeu
const statsList = {
    photo1: "File: photo1.jpg\nSize: 720\tBlocks: 8\tIO Block: 4096\tregular file\nDevice: 704h/1796d\tInode: 1024\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ baste)   Gid: ( 1000/ baste)\nAccess: 2020-03-02 16:00:00.000000000 +0100\nModify: 2020-03-02 16:00:00.000000000 +0100\nChange: 2020-03-02 16:00:00.000000000 +0100\n Birth: -\n",
    photo2: "File: photo2.jpg\nSize: 2460\tBlocks: 8\tIO Block: 4096\tregular file\nDevice: 704h/1796d\tInode: 5421\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ baste)   Gid: ( 1000/ baste)\nAccess: 2020-03-02 16:00:00.000000000 +0100\nModify: 2020-03-02 16:00:00.000000000 +0100\nChange: 2020-03-02 16:00:00.000000000 +0100\n Birth: -\n",
    photo3: "File: photo3.jpg\nSize: 1547\tBlocks: 8\tIO Block: 4096\tregular file\nDevice: 704h/1796d\tInode: 1433\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ baste)   Gid: ( 1000/ baste)\nAccess: 2020-03-02 16:00:00.000000000 +0100\nModify: 2020-03-02 16:00:00.000000000 +0100\nChange: 2020-03-02 16:00:00.000000000 +0100\n Birth: -\n",
    photo4: "File: photo4.jpg\nSize: 666\tBlocks: 8\tIO Block: 4096\tregular file\nDevice: 704h/1796d\tInode: 198885\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ baste)   Gid: ( 1000/ baste)\nAccess: 2020-03-02 16:00:00.000000000 +0100\nModify: 2020-03-02 16:00:00.000000000 +0100\nChange: 2020-03-02 16:00:00.000000000 +0100\n Birth: -\n",
    photo5: "File: photo5.jpg\nSize: 1234\tBlocks: 8\tIO Block: 4096\tregular file\nDevice: 704h/1796d\tInode: 1234\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ baste)   Gid: ( 1000/ baste)\nAccess: 2020-03-02 16:00:00.000000000 +0100\nModify: 2020-03-02 16:00:00.000000000 +0100\nChange: 2020-03-02 16:00:00.000000000 +0100\n Birth: -\n",

    getFileStats: function (fileName) {
        switch (fileName) {
            case "photo1.jpg":
                return this.photo1;
            case "photo2.jpg":
                return this.photo2;
            case "photo3.jpg":
                return this.photo3;
            case "photo4.jpg":
                return this.photo4;
            case "photo5.jpg":
                return this.photo5;
            default:
                return "ls: cannot access '" + fileName + "': No such file or directory or this file have no stats in memory";
        }
    }
}

const repository = {
    "photos": {
        "photo1.jpg": "Une magnifique photo de moi",
        "photo2.jpg": "Il est mignon mon chat",
        "photo3.jpg": "IJava c'est vraiment null",
        "photo4.jpg": "Je suis trop beau",
        "photo5.jpg": "Mon super monocycle",
    },
    "cours": {
        "sys-coursV1.txt": "Votre dossier personnel étant le dossier dans lequel vous allez stocker toutes vos données, il est de première importance de le structurer avant que le désordre s’installe. (Et je vous assure que ça arrive très vite !) Pour cela, vous allez créer des dossiers. Pour la ressource R1.04, vous allez créer un dossier R1.04 dans votre dossier personnel. Jusqu’à maintenant, vous avez uniquement utilisé la commande ls suivie du chemin absolu du dossier que vous vouliez observer. Pour créer un dossier, il faut utiliser la commande mkdir suivie du chemin absolu du dossier que vous voulez créer. (Si cela peut vous aider, pour l’écriture du chemin, vous pouvez faire comme si le dossier existait déjà.)",
        "sys-coursV2.txt": "Votre dossier personnel étant le dossier dans lequel vous allez stocker toutes vos données, il est de première importance de le structurer avant que le désordre s’installe. (Et je vous assure que ça arrive très vite !) Pour cela, vous allez créer des dossiers. Pour la ressource R1.04, vous allez créer un dossier R1.04 dans votre dossier personnel Brian Fox. Jusqu’à maintenant, vous avez uniquement utilisé la commande ls suivie du chemin absolu du dossier que vous vouliez observer. Pour créer un dossier, il faut utiliser la commande mkdir suivie du chemin absolu du dossier que vous voulez créer. (Si cela peut vous aider, pour l’écriture du chemin, vous pouvez faire comme si le dossier existait déjà.)",
        "ds-sys-2023.pdf": "DS de système 2023"
    },
    "documents": {
        "cv.pdf": "Mon CV est juste trop beau :P",
        "releve-de-compte.txt": "Credit Agricole\n\nSolde: 100000€\n\nTéléphone portable:06 06 06 06 06\n\nAdresse: 1 rue de la paix\n\n",
        "facture-energie.pdf": "EDF\n\nFacture du 01/01/2020 au 01/02/2020\n\nFacture: 20€\n\nTéléphone:09 04 51 24 65\n\nAdresse: 1 rue de la paix\n\n",
        "facture-telephone.pdf": "SFR\n\nFacture du 01/01/2020 au 01/02/2020\n\nFacture: 20€\n\nTéléphone:09 04 51 24 65\n\nAdresse: 1 rue de la paix\n\n",
    }
}

const indiceList = [
    "La commande \"whoami\" renvoie le nom de l'utilisateur courant. Si tu exécutes cette commande, tu verras quel est ton nom d'utilisateur actuel (tu es actuellement baste). Ensuite, tu peux simplement taper la commande \"unlock\". Cela fera apparaître une fenêtre contextuelle où tu dois entrer \"baste\" comme nom d'utilisateur. À partir de là, tu pourras passer à l'étape suivante.",
    "La commande \"ls\" affiche tous les fichiers et dossiers présents dans le répertoire courant, c'est-à-dire là où tu te trouves actuellement. Pour aller dans le dossier \"documents\", tape la commande \"cd documents\". Ensuite, refais la commande \"ls\" et tu devrais voir plusieurs fichiers. Les fichiers en format \".pdf\" ne sont pas lisibles pour un humain ordinaire. Cependant, il y a le fichier \"revele-de-compte.txt\" qui est lisible. Pour le lire, tape la commande \"cat revele-de-compte.txt\". Tu verras que le fichier contient des informations sur le compte bancaire de la personne, ainsi que son adresse qui est \"1 rue de la paix\". Pour afficher cette adresse, tape la commande \"echo 1 rue de la paix\". Tu peux maintenant passer à l'étape suivante.",
    "Pour revenir en arrière, tape la commande \"cd ..\" (les deux points indiquent de remonter d'un niveau dans l'arborescence des dossiers). Ensuite, tape la commande \"ls\" pour voir tous les dossiers et fichiers présents dans le dossier parent. Tu devrais voir un dossier appelé \"photos\" (les dossiers ici n'ont pas d'extension). Pour te déplacer dans le dossier \"photos\", tape la commande \"cd photos\". Tu peux refaire la commande \"ls\" pour voir les fichiers présents dans le dossier \"photos\". Maintenant, tape la commande \"stat photoX.jpg\" en remplaçant \"X\" par le numéro de la photo pour laquelle tu veux voir les statistiques. Tu verras que les statistiques sont différentes pour chaque photo. La plus grande photo est la numéro 2. Sa taille est de 2460 bits. Pour créer un fichier appelé \"2460\", tape la commande \"touch 2460\". Tu peux maintenant passer à l'étape suivante.",
    "Pour revenir en arrière, tape la commande \"cd ..\" (les deux points indiquent de remonter d'un niveau dans l'arborescence des dossiers). Ensuite, tape la commande \"ls\" pour voir tous les dossiers et fichiers présents dans le dossier parent. Tu devrais voir un dossier appelé \"cours\" (les dossiers ici n'ont pas d'extension). Pour te déplacer dans le dossier \"cours\", tape la commande \"cd cours\". Tu peux refaire la commande \"ls\" pour voir les fichiers présents dans le dossier \"cours\". Maintenant, tape la commande \"diff sys-coursV1.txt sys-coursV2.txt\". Normalement, tu verras la différence qui est \"Brian Fox\" (en réalité, la commande \"diff\" est beaucoup plus complexe et affiche beaucoup plus d'informations). Ensuite, tape la commande \"mkdir Brian Fox\" pour créer un dossier appelé \"Brian Fox\". Tu peux maintenant passer à l'étape suivante.",
    "Tu as juste à faire la commande sudo unlock_pc. Rentre le mots de passe I977. Tu as finis le jeu bravo !"
    
];

let indice = indiceList[0];

let game = {
    etapes: [false, false, false, false, false], // Ici ce sont les étapes du jeu 
    whereIAm: "", // L'endroit ou le joueur se trouve
    texteEnigmes: [ // Les énigmes du jeu
        "Quelle est mon adresse ? Quand tu le sauras, tu l'afficheras dans le terminal. Mon super mots de passe est: I***",
        "Parmi mes photos, trouve celle qui a une grande taille. Quand tu l'auras trouvée, crée un fichier portant le nom de cette taille. Mon super mots de passe est: I*7*",
        "Une différence s'est glissée entre les deux versions de mon cours, quelle est-elle ? Quand tu l'auras identifiée, crée un dossier portant le nom de cette différence. Mon super mots de passe est: I*77",
        "Maintenant, prends les pouvoirs de Dieu tous puissant 😜 ! Démarre unlock_pc avec les droits root. Mon super mots de passe est: I977"
    ],

    passEtape: function passEtape() {
        /**
         * Cette fonction permet de passer à l'étape suivante du jeu
         * Si toutes les étapes sont passées, elle renvoie un indiquant que toutes les étapes sont passes (ce qui ne doit jamais arrivé normalement)
         * @returns {string} Une chaine de caractère indiquant si toutes les étapes sont passées ou non
         */
        for (let i = 0; i < this.etapes.length; i++) {
            if (this.etapes[i] == false) {
                this.etapes[i] = true;
                const newLine = document.createElement('h3'); // On crée un nouveau h3
                newLine.innerText = this.texteEnigmes[i]; // On ajoute le texte de l'énigme
                terminalWindow.appendChild(newLine); // On ajoute le h3 à la fenêtre du terminal
                alert("Vous avez débloqué la prochaine étape !"); // On affiche une alerte
                indice = indiceList[i+1]; // On change l'indice
                document.getElementById("indiceTexte").innerHTML = "";
                return "";
            }
        }
        return "Toutes les étapes sont passées";
    },

    instantUnlock: function instantUnlock() {
        /**
         * Cette fonction permet de débloquer toutes les étapes du jeu
         * Elle est utilisée pour le mode "développeur"
        */
        for (let i = 0; i < this.etapes.length; i++) {
            this.etapes[i] = true;
        }
    },

    checkEtape: function checkEtape() {
        /**
         * Cette fonction renvoie l'étape actuelle du jeu (-1 si toutes les étapes sont passées)
         * @returns {number} L'étape actuelle du jeu
         */
        for (let i = 0; i < this.etapes.length; i++) {
            if (!this.etapes[i]) { // On vérifie si l'étape n'est pas passée
                return i;
            }
        }
        return -1;
    },

    helpCommand: function helpCommand() {
        /**
         * Cette fonction renvoie la liste des commandes disponibles
         * Selon l'étape du jeu, certaines commandes ne sont pas disponibles
         * @returns {string} La liste des commandes disponibles
         */
        let result = "List of commands availables: \n\t";
        result += "help: display this help\n\t";
        result += "whoami: display your username\n\t";
        result += "clear: clear the terminal\n\t";
        result += "unlock: unlock the next step if the password is correct (custom command)\n\t";
        result += 'man "command": display the manual of a command\n\t';
        console.log("Etapes passées: " + this.checkEtape());
        if(this.checkEtape() >= 1) {
            result += "cd directory: change directory\n\t";
            result += "pwd: display the current directory\n\t";
            result += "ls: list files and directories\n\t";
            result += "cat file: display the content of a file\n\t";
            result += "echo anything: display a message\n\t";
        }
        if(this.checkEtape() >= 2) {
            result += "stat file: display the status of a file\n\t";
            result += "touch nameOfFile: create a file\n\t";
        }
        if(this.checkEtape() >= 3) {
            result += "diff file1 file2: compare two files\n\t";
            result += "mkdir nameOfDir: create a directory\n\t";
        }
        if(this.checkEtape() >= 4) {
            result += "sudo: execute a command as root\n\t";
        }
        return result;
    },
    
    whoamiCommand: function whoamiCommand() {
        /**
         * Cette fonction renvoie le nom de l'utilisateur
         * @returns {string} Le nom de l'utilisateur
         */
        return "baste";
    },

    unlockCommand: function unlockCommand() {
        /**
         * Cette fonction permet de débloquer l'étape suivante du jeu
         * Si l'étape est déjà débloquée, elle renvoie un message d'erreur
         * @returns {string} Le message d'erreur ou de succès
         */
        if(this.checkEtape() == 0) {
            return prompt("Qui suis-je ?") === this.whoamiCommand() ? this.passEtape() : "Wrong password"; // On demande le nom de l'utilisateur, le ? permet de faire un if/else en une ligne
        }
        return "Vous avez déjà débloqué l'étape !";
    },

    pwdCommand: function pwdCommand() {
        /**
         * Cette fonction renvoie le chemin actuel du joueur
         * @returns {string} Le chemin actuel du joueur
         */
        if(this.checkEtape() >= 1) { // On vérifie que l'étape est débloquée
            console.log("pwd command activated");
            if(this.whereIAm === "") {
                return "~ ";
            }
            return "~/" + this.whereIAm + " ";
        }
        return "Command not found";
    },

    cdCommand: function cdCommand(folderToGo) {
        /**
         * Cette fonction permet de changer de dossier
         * Si le dossier n'existe pas, elle renvoie une erreur
         * @param {string} folderToGo Le dossier dans lequel on veut aller
         * @returns {string} Une erreur si le dossier n'existe pas, sinon rien
         */
        console.log("cd command activated with folder: " + folderToGo);
        if(this.checkEtape() >= 1 && folderToGo !== undefined) {
            // Si il y a un /, alors split le dossier et appelle la fonction récursivement
            if(folderToGo.includes("/")) {
                const folders = folderToGo.split("/");
                let result = "";
                for (let i = 0; i < folders.length; i++) {
                    result += this.cdCommand(folders[i]);
                }
                return result;
            }
            if(folderToGo === "..") { // Si le joueur veut revenir en arrière (dossier parent)
                this.whereIAm = "";
            } 
            if(folderToGo === ".") { // Si le joueur veut rester dans le même dossier
                return "";
            }

            if(folderToGo === "photos" || folderToGo === "cours" || folderToGo === "documents" && this.whereIAm === "") { // Si le dossier existe et que le joueur est dans le dossier baste
                this.whereIAm = folderToGo; // On mets à jour le dossier actuel
            }
            return "";
        }
        return "Command not found";
    },

    lsCommand: function lsCommand(folder=null) {
        /**
         * Cette fonction renvoie la liste des fichiers et dossiers du dossier actuel
         * @returns {string} La liste des fichiers et dossiers du dossier actuel
         */
        let result = "";
        if(this.checkEtape() >= 1) {
            if(folder !== null) {
                if(repository[folder] !== undefined && this.whereIAm === "") {
                    for(const key in repository[folder]) result += key + "\n";
                    return result;
                }
            }
            if(this.whereIAm === "") {
                return "photos\ncours\ndocuments";
            }
            console.log("ls command activated");
            for(const key in repository[this.whereIAm]) result += key + "\n";
            return result;
        }
        return "Command not found";
    },

    catCommand: function catCommand(fichier) {
        /**
         * Cette fonction renvoie le contenu d'un fichier
         * Si le fichier n'existe pas, elle renvoie une erreur
         * @param {string} fichier Le fichier dont on veut afficher le contenu
         */
        if(this.checkEtape() >= 1 && fichier !== undefined) {
            console.log("cat command activated with folder: " + fichier);

            if(fichier.includes("/")) {
                let chemin = fichier.split("/");
                let file = chemin[chemin.length - 1];
                chemin = chemin.slice(0, chemin.length - 1);
                let saveWhoAMi = this.whereIAm;
                this.cdCommand(chemin.join("/"));
                let result = this.catCommand(file);
                this.whereIAm = saveWhoAMi;
                return result;
            }
            try {
                if(repository[this.whereIAm][fichier] !== undefined) {
                    return repository[this.whereIAm][fichier];
                }
            } catch(e) {
                return "File not found";
            }            
            return "File not found";
        }
        return "Command not found";
    },

    echoCommand: function echoCommand(toEcho) {
        /**
         * Cette fonction affiche un message
         * @param {string} toEcho Le message à afficher
         * @returns {string} Le message à afficher
         */
        if(this.checkEtape() >= 1 && toEcho !== undefined) { // On vérifie que l'étape est débloquée et que le joueur a bien entré un message
            let echo = ""; // On initialise la variable qui contiendra le message
            for(let i = 0; i < toEcho.length; i++) {
                if(toEcho[i] === "\\") { // Si le joueur veut afficher un retour à la ligne
                    if(toEcho[i+1] === "n") {
                        echo += "\n";
                        i++;
                    }
                } else { // Sinon on ajoute le caractère au message
                    echo += toEcho[i] + " ";
                }
            }
            echo = echo.substring(0, echo.length - 1); // On supprime le dernier espace
            console.log("echo command activated with message: " + echo);
            if(echo === "1 rue de la paix" && this.checkEtape() == 1) { // Si le joueur a trouvé l'adresse de la maison
                this.passEtape(); // On débloque l'étape
                return "";
            }
            return echo;
        }
        return "Command not found";
    },

    fileInRepository: function fileInRepository(file) {
        /**
         * Cette fonction vérifie si un fichier existe dans le dossier actuel
         * @param {string} file Le fichier à vérifier
         * @returns {boolean} true si le fichier existe, false sinon
         */
        for(const key in repository[this.whereIAm]) {
            if(key === file) return true;
        }
        return false;
    },

    statCommand: function statCommand(fileName) {
        /**
         * Cette fonction renvoie les statistiques d'un fichier
         * Si le fichier n'existe pas, elle renvoie une erreur
         * @param {string} fileName Le fichier dont on veut afficher les statistiques
         * @returns {string} Les statistiques du fichier ou une erreur si le fichier n'existe pas
         */
        if(this.checkEtape() >= 2) {
            if(!this.fileInRepository(fileName)) { // Si le fichier n'existe pas
                return "File not found";
            } else {
                console.log("stat command activated with file: '" + fileName + "'");
                return statsList.getFileStats(fileName);
            }
        }
        return "Command not found";
    },

    touchCommand: function touchCommand(nameFile) {
        /**
         * Cette fonction crée un fichier
         * @param {string} nameFile Le nom du fichier à créer
         * @returns {string} Une erreur si le fichier existe déjà, sinon une chaîne vide
         */
        if(this.checkEtape() == 2 && nameFile !== undefined) { // On vérifie que l'étape est débloquée et que le joueur a bien entré un nom de fichier
            if(nameFile === "2460") { // Si le joueur a trouvé le code de la maison
                game.passEtape();
                return "";
            } else { // Sinon on dit qu'il n'a pas assez de place pour créer le fichier
                return "Quota exceeded !";
            }
        }
        return "Command not found";
    },

    diffCommand: function diffCommand(firstFile, secondFile) {

        /**
         * Cette fonction compare deux fichiers
         * @param {string} firstFile Le premier fichier à comparer
         * @param {string} secondFile Le second fichier à comparer
         * @returns {string} Une erreur si les fichiers n'existent pas, sinon une chaîne vide
         */
        if(this.checkEtape() >= 3 && firstFile !== undefined && secondFile !== undefined) { // On vérifie que l'étape est débloquée et que le joueur a bien entré deux fichiers
            if(firstFile === secondFile) { // Si les deux fichiers sont identiques
                return "Impossible de comparer un fichier avec lui-même";
            }
            if(firstFile === "sys-coursV1.txt" && secondFile === "sys-coursV2.txt" || firstFile === "sys-coursV2.txt" && secondFile === "sys-coursV1.txt") { // Si les deux fichiers sont les deux versions du cours
                if(this.whereIAm === "cours" ) { // Vérifier que le joueur est dans le bon dossier
                    return "\n+ | Brian Fox";
                }
            }
            return "Impossible de comparer les fichiers";
        }
        return "Command not found";
    },

    mkdirCommand: function mkdirCommand(nameDir) {
        /**
         * Cette fonction crée un dossier
         * @param {string} nameDir Le nom du dossier à créer
         * @returns {string} Une erreur si le dossier existe déjà, sinon une chaîne vide
         */
        if(this.checkEtape() >= 3) { // On vérifie que l'étape est débloquée
            let dir = "";
            for(let i = 0; i < nameDir.length; i++) {
                dir += nameDir[i] + " ";
            }
            dir = dir.substring(0, dir.length - 1); // On supprime le dernier espace
            console.log("mkdir command activated with folder: '" + dir + "'");
            if(dir === "Brian Fox" && this.checkEtape() === 3) { // Si le joueur a trouvé le nom
                game.passEtape();
                return "";
            } else { // Sinon on dit qu'il n'a pas assez de place pour créer le dossier
                return "Quota excedeed !";
            }
        }
        return "Command not found"
    },

    sudoCommand: function sudoCommand(args) {
        /**
         * Cette fonction permet d'accéder à la commande sudo
         * @param {string} args Les arguments de la commande sudo
         * @returns {string} Une erreur si l'étape n'est pas débloquée, sinon une chaîne vide
         */
        if(this.checkEtape() >= 4) { // On vérifie que l'étape est débloquée
            if(args === "unlock_pc") { // Si l'utilisateur a entré la bonne commande
                if(prompt("Quelle est mon mots de passe ?") !== "I977") {return "Mots de passe incorrect !"} // On demande le mot de passe
                if(confirm("Êtes-vous sur de vouloir accéder à tous les fichiers de l'ordinateur ?")) { // On demande confirmation
                    window.open("./end/pagePerdu.html", "_self");
                } else { // Si l'utilisateur annule
                    if(confirm("Voulez-vous supprimer toutes les données de l'ordinateur ?")) { // On demande confirmation
                        window.open("./end/pageFin.html", "_self");
                    }
                }
                return "Commande annulée";
            } else { // Si l'utilisateur n'a pas entré la bonne commande
                return "Impossible de démarrer sudo !";
            }
        }
        return "Command not found";
    },

    manCommand: function manCommand(commandName) {

        switch (commandName) {
            case "whoami":
                window.open("https://man7.org/linux/man-pages/man1/whoami.1.html", "_blank");
        }

        if(this.checkEtape() >= 1) {
            switch (commandName) {
                case "cd":
                    window.open("./man/cd.html", "_blank");
                    break;
                case "ls":
                    window.open("./man/ls.html", "_blank");
                    break;
                case "cat":
                    window.open("./man/cat.html", "_blank");
                    break;
                case "echo":
                    window.open("./man/echo.html", "_blank");
                    break;
                case "pwd":
                    window.open("https://man7.org/linux/man-pages/man1/pwd.1.html", "_blank");
                    break;
            }
        }
        if(this.checkEtape() >= 2) {
            switch (commandName) {
                case "stat":
                    window.open("./man/stat.html", "_blank");
                    break;
                case "touch":
                    window.open("https://man7.org/linux/man-pages/man1/touch.1.html", "_blank");
                    break;
            }
        }
        if(this.checkEtape() >= 3) {
            switch (commandName) {
                case "diff":
                    window.open("https://man7.org/linux/man-pages/man1/diff.1.html", "_blank");
                    break;
                case "mkdir":
                    window.open("./man/mkdir.html", "_blank");
                    break;
            }
        }
        if(this.checkEtape() >= 4) {
            if(commandName === "sudo") {
                window.open("https://man7.org/linux/man-pages/man8/sudo.8.html", "_blank");
            }
        }
        return "";
    },

    clearCommand: function clearCommand() {
        /**
         * Cette fonction permet de vider la fenêtre du terminal
         */
        terminalWindow.innerHTML = "";
        const newLine = document.createElement('h3'); // On crée un nouveau h3
        let i = game.checkEtape();
        if(i === 0) {
            newLine.innerText = "\"Qui suis-je ? Dès que tu le sais, fais la commande unlock\"";
        } else {
            newLine.innerText = this.texteEnigmes[i - 1];
        }
        terminalWindow.appendChild(newLine); // On ajoute le h3 à la fenêtre du terminal
        return "";
    }
}

function userInput(event) {
    if(event.key === 'Enter') {
        const inputUser = event.target; // Récupérer l'input
        const commandUser = inputUser.value; // Récupérer la commande passée par l'utilisateur
        inputUser.disabled = true; // Désactiver l'input
        const output = commandExecutor(commandUser); // Exécuter la commande
        const newLine = document.createElement('p'); // Créer un nouveau paragraphe
        newLine.innerText = output; // Ajouter la sortie de la commande dans le paragraphe
        
        terminalWindow.appendChild(newLine); // Ajouter le paragraphe dans la fenêtre du terminal

        const newCommandLine = document.createElement('p'); // Créer un nouveau paragraphe
        newCommandLine.setAttribute('id', 'command-line'); // Ajouter un id au paragraphe

        const newPrompt = document.createElement('span'); // Créer un nouveau span
        let dir = game.pwdCommand(); // Récupérer le chemin actuel
        let name = "*****" // Récupérer le nom de l'utilisateur
        if(dir === "Command not found") { // Si la commande pwd n'existe pas
            dir = '~';
        }
        if(game.checkEtape() >= 1) { // Si l'étape 1 est débloquée
            name = "baste"
        }
        newPrompt.innerText = '[' + name + '@archlinux] ' + dir + ' : '; // Ajouter le prompt dans le span
        newCommandLine.appendChild(newPrompt); // Ajouter le span dans le paragraphe

        const newInput = document.createElement('input'); // Créer un nouvel input
        newInput.setAttribute('type', 'text'); // Ajouter un type à l'input
        newInput.setAttribute('name', 'input'); // Ajouter un nom à l'input
        newInput.setAttribute('class', 'input'); // Ajouter une classe à l'input
        newInput.setAttribute('onkeypress', 'userInput(event);'); // Ajouter un événement à l'input
        newCommandLine.appendChild(newInput); // Ajouter l'input dans le paragraphe

        terminalWindow.appendChild(newCommandLine); // Ajouter le paragraphe dans la fenêtre du terminal
        window.scrollTo(0, document.body.scrollHeight); // Faire défiler la fenêtre du terminal

        // Autofocus to the new input
        newInput.focus();
    }
}

function commandExecutor(command) {
    /**
     * Cette fonction permet d'exécuter une commande
     * @param {string} command La commande à exécuter
     * @returns {string} La sortie de la commande
     */
    let arrayCommand = command.split(" ");
    let commandName = arrayCommand[0];
    let args = arrayCommand.slice(1);
    for(let i = 0; i < args.length; i++) {
        args[i] = args[i].replace('"', '');
    }

    try {
        switch(commandName) {
            case "help":
                return game.helpCommand();
            case "whoami":
                return game.whoamiCommand();
            case "unlock":
                return game.unlockCommand();
            case "pwd":
                return game.pwdCommand();
            case "cd":
                return game.cdCommand(args[0]);
            case "ls":
                if(args.length > 0) { return game.lsCommand(args[0]); }
                return game.lsCommand();
            case "cat":
                return game.catCommand(args[0]);
            case "echo":
                return game.echoCommand(args);
            case "stat":
                return game.statCommand(args[0]);
            case "touch":
                return game.touchCommand(args[0]);
            case "diff":
                return game.diffCommand(args[0], args[1]);
            case "mkdir":
                return game.mkdirCommand(args);
            case "sudo":
                return game.sudoCommand(args[0]);
            case "man":
                return game.manCommand(args[0]);
            case "clear":
                return game.clearCommand();
            default:
                return "Command not found";
        }
    } catch (error) {
        console.log(error);
        console.log("Name command -> " + commandName + " Args -> " + args);
        return "Une erreur est survenue, merci de contacter l'administrateur du site";
    }
}

const btnIndice = document.getElementById("btnIndice");
const indicePage = document.getElementById("indice");
indicePage.style.display = 'none';
const quitIndice = document.getElementById("quitIndice");
quitIndice.style.display = 'none';

function indiceSwitch() {
    if (indicePage.style.display === 'none') {
        indicePage.style.display = 'block';
        btnIndice.style.display = 'none';
        quitIndice.style.display = 'block';
        document.querySelectorAll('input').forEach(function (input) {
            input.disabled = true;
        });
        console.log("Set indice to block");
        writeText();
    } else {
        indicePage.style.display = 'none';
        btnIndice.style.display = 'block';
        quitIndice.style.display = 'none';
        document.querySelectorAll('input').forEach(function (input) {
            input.disabled = false;
            input.focus();
        });

        console.log("Set indice to none");
    }
  }

let i = 0;
function writeText() {
    if(document.getElementById("indiceTexte").innerHTML === indice) {
        console.log("Indice deja affiché !");
    }else if (i < indice.length) {
        document.getElementById("indiceTexte").innerHTML += indice.charAt(i);
        document.getElementById("indiceTexte").focus();
        i++;
        setTimeout(writeText, 30);
    } else {
        i = 0;
    }
}

/**
 * .bash_history - Escape Game 
 * @author Valentin Thuillier <@luxferre>
 * @version 1.1
 * @license MIT
 */