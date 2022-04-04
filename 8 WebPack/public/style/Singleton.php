<?php






class Singleton
{
    private static $instances = [];

    protected function __construct() { }

    public static function getInstance(): Singleton
    {
        $cls = static::class;
        if (!isset(self::$instances[$cls])) {
            self::$instances[$cls] = new static();
        }

        return self::$instances[$cls];
    }

    public function someLogic()
    {
        // ...
    }
}
