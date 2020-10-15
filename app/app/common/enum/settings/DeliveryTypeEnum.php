<?php

namespace app\common\enum\settings;

use MyCLabs\Enum\Enum;
/**
 * 配送方式枚举类
 */
class DeliveryTypeEnum extends Enum
{
    // 快递配送
    const EXPRESS = 10;
    const STORE = 99;

    /**
     * 获取枚举数据
     */
    public static function data()
    {
        return [
            self::EXPRESS => [
                'name' => '快递配送',
                'value' => self::EXPRESS,
            ],
            self::STORE => [
                'name' => '商家配送',
                'value' => self::STORE,
            ]
        ];
    }

}