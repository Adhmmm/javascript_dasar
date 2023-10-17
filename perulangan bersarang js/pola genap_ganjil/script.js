var s = "";
for (var i = 0; i < 6; i++) {
    if(i % 2 == 0) {
        for(var j = 0; j < 6; j++) {
            if(j % 2 == 0) {
                s += "#";
            } else {
                s += " ";
            }
        }
        s += "\n";
    } else {
        for(var j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                s +=" ";
            } else {
                s += "#";
            }
        }
        s +="\n";
    }
}
console.log(s)