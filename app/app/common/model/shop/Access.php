<?php

namespace app\common\model\shop;

use app\common\model\BaseModel;
/**
 * 商家用户权限模型
 */
class Access extends BaseModel
{
    //表名
    protected $name = 'shop_access';
    //主键字段名
    protected $pk = 'access_id';

    /*
     * 获取所有权限
     */
    protected static function getAll()
    {
        $data = static::withoutGlobalScope()->order(['sort' => 'asc', 'create_time' => 'asc'])->select();
        return $data ? $data->toArray() : [];
    }
}