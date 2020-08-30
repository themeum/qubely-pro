<?php
namespace QUBELY_PRO;

defined('ABSPATH') || exit;

class Newsletter  {

  public $mailchimp;


  public function __construct()
  {
    $this->init();
  }

  public function init() {

    // Register Mailchimp Class
    require_once QUBELY_PRO_DIR_PATH . 'core/newsletters/mc.php';
    $this->mailchimp = new \Qubely_Mailchimp();

    // Register Mailer Lite Class


  }


}