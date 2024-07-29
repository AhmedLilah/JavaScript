function leftPad(str, len, ch) {
        let l = len - str.length;
        return new Array( l >= 0 ? l : 0).fill(!ch && ch !== 0 ? ' ' : ch).join("") + str;
}

s = "leftPad";
for (let i = s.length; i<s.length+10; ++i) {
        console.log(leftPad(s, i, i-s.length));
}
