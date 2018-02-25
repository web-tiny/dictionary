       /**
			 * (字符串方法)methods of string
			 */
			let  str=' tiny.jiao is Jiao Rengui ! ';
			let split=str.split(' ');
			console.log(split);//["", "tiny.jiao", "is", "Jiao", "Rengui", "!", ""]
			
			let charAt=str.charAt(4);
			console.log(charAt);//y
			
			let indexOf=str.indexOf('i');
			console.log(indexOf);//2
			
			let lastIndexOf=str.lastIndexOf('i');
			console.log(lastIndexOf);//24
			
			let charCodeAt=str.charCodeAt(1);
			console.log(charCodeAt);//116
			
			let concatStr='Hello Erye';
			console.log(concatStr.concat(str));//Hello Erye tiny.jiao is Jiao Rengui !
			
			let substrStr=concatStr.substr(0,5);
			console.log(substrStr);//Hello
			
			let substringStr=concatStr.substring(0,5);
			console.log(substringStr);//Hello
			
			let sliceStr=concatStr.slice(0,5);
			console.log(sliceStr);//Hello
			
			let replaceStr=concatStr.replace('Erye','zhang fei');
			console.log(replaceStr);//Hello zhang fei
			
			let matchStr=concatStr.match('l');
			let reg=/h/i;
			console.log(matchStr);//["l", index: 2, input: "Hello Erye"]
			console.log(concatStr.match(reg));//["H", index: 0, input: "Hello Erye"]
			
			let searchStr=concatStr.search('Hell');
			console.log(searchStr);//0
			
			for(let forOf of 'jiao'){
				console.log(forOf);
			}
			
			console.log(concatStr.includes('E'));//true
			console.log(concatStr.startsWith('H'));//true
			console.log(concatStr.endsWith('e'));//true
			console.log('*'.repeat(6));//******
			console.log('hello'.padStart(10,'X'));//XXXXXhello
			console.log('hello'.padEnd(10,'X'));//helloXXXXX
