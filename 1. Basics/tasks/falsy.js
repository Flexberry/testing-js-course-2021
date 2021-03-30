class TestForLies {
  constructor(array, newArray) {
    this.array = array;
    this.newArray = newArray;
	}
	
	removeFalsyValues(){
		this.newArray = this.array.filter(Boolean);
	}
}

export default TestForLies;