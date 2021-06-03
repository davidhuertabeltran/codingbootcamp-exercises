<?php

class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    public function insert()
    {
        $sql = "INSERT
        INTO `regions`
        (`name`, `slug`)
        VALUES
        (?, ?)
        ";

        insert($sql, [
            $this->name,
            $this->slug
        ]);

        $this->id = last_insert_id(); //update the object's id property
    }

}