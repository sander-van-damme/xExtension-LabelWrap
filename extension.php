<?php
class LabelWrapExtension extends Minz_Extension {
	public function init(): void {
		Minz_View::appendStyle($this->getFileUrl('label_wrap.css', 'css'));
		Minz_View::appendScript($this->getFileUrl('label_wrap.js', 'js'));
	}
}
