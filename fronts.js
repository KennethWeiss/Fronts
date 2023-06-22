class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(head=null){
        this.head = head;
    }
    addFront(data){
        if(this.head == null){
            this.head = new Node(data)
        }
        else{
            let temp = this.head
            this.head = new Node(data)
            this.head.next = temp
        }
    }
    removeFront(){
        if(this.head == null){
            return null;
        }
        let popvalue = this.head;
        this.head = this.head.next;
        return popvalue
    }
    front(){
        if(this.head == null){
            return console.log(null);
        }
        let firstValue = this.head.data
        return console.log(firstValue)
    }
    log(){
        if(this.head == null){
            console.log(null);
            return
        }
        else{
            console.log("*** start of list ***")
            let pointer = this.head;
            while(pointer != null){
                console.log(pointer.data);
                pointer = pointer.next;
            }
            console.log("*** end of list ***")
        }
    }
}

sll = new SLL()
sll.addFront(10)
sll.addFront(15)
sll.addFront(18)
sll.log()
sll.addFront(20)
sll.log()
sll.removeFront()
sll.log()
sll.front()