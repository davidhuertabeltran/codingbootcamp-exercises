<?php

class Computer {
    public $model = null;
    public $operating_system = null;
    public $is_portable = false;
    public $status = 'off';

    public function switchOff()
    {
        $this->status = 'off';
    }

    public function toggleSwitch()
    {
        //this code
        $this->status = $this->status === 'off' ? 'on' : 'off';


        // is the same as the one below:
        
        // if ($this->status === 'off') {
        //     $this->status = 'on';
        // } else {
        //     $this->status = 'off';
        // }
    }
}

