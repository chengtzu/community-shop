<?php

namespace app\common\enum\order;

use MyCLabs\Enum\Enum;

/**
 * 订单支付方式枚举类
 */
class OrderPayTypeEnum extends Enum
{
    // 微信支付
    const WECHAT = 20;
    // 测试支付
    const TEST   = 99;
    /**
     * 获取枚举数据
     */
    public static function data()
    {
        return [
            self::WECHAT => [
                'name' => '微信支付',
                'value' => self::WECHAT,
            ],
            self::TEST => [
                'name' => '测试支付',
                'value' => self::TEST,
            ]
        ];
    }

}