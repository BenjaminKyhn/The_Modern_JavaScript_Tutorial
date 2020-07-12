let styles = ["Jazz", "Blues"];
alert(styles);

styles[2] = "Rock-n-Roll";
alert(styles);

styles[(styles.length - 1) / 2] = "Classics";
alert(styles);

styles.shift();
alert(styles);

styles.unshift("Rap", "Reggae");
alert(styles);
