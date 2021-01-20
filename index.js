const deepCopy = (obj) => {
	if (typeof obj !== "object") return;
	const newObj = obj.construct === Array ? [] : {};
	for (let key in obj) 
		newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
	return newObj; 
}