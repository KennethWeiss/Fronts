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
    push(data){
        if(this.head==null){
            this.head = new Node(data);
            return
        }
        else{
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next
            }
            pointer.next = new Node(data);
            return
        }
    }
    pop(){
        if(this.head.next == null){
            return null;
        }
        else if(this.head.next == null){
            let temp = this.head.data;
            this.head = null;
            return temp
        }
        else{
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next
            }
            let temp = pointer.next.data;
            pointer.next = null;
            return temp
        }
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
sll.push(10)
sll.push(15)
sll.push(18)
sll.log()
sll.addFront(20)
sll.log()
sll.removeFront()
sll.log()
sll.front()