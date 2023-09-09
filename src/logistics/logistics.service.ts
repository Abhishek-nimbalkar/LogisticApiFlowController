// import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { CreateLogisticDto } from './dto/create-logistic.dto';
// import { UpdateLogisticDto } from './dto/update-logistic.dto';
import { searchPayload, bap_uri } from 'payload/searchPayload';
import axios from 'axios';
import { Request } from 'express';
import { initPayload } from 'payload/initPayload';
// import { URL } from './dto/create-logistic.dto';
import { confirmPayload } from 'payload/confirmPayload';
import { creatJson } from 'src/utils/fileWrite';
@Injectable()
export class LogisticsService {
  initBody: any;
  confirmBody: any;
  async search() {
    console.log('something in search');

    const res = await axios.post('http://localhost:8001/search', searchPayload);
    creatJson('/search.json', searchPayload);
    console.log('res', res.data);
    // console.log('res', res);
    return res.data;
    // return 'some';
  }
  async on_search(req: Request) {
    // const res = await axios.post('http://localhost:8001/search', searchPayload);
    // console.log('ON_search=======', JSON.stringify(req.body));
    creatJson('/on_search.json', req.body);
    this.initBody = initPayload(
      req?.body?.message?.catalog['bpp/providers'][0]?.id,
      req?.body?.message?.catalog['bpp/providers'][0]?.fulfillments[0]?.id,
    );
    // console.log(
    //   'initBody=========',
    //   JSON.stringify(this.initBody),
    //   '===========',
    // );
    return { message: 'on_search was hit' };
  }
  async init() {
    // console.log('this.initBody===================', this.initBody);
    const res = await axios.post('http://localhost:8001/init', this.initBody);
    creatJson('/init.json', this.initBody);
    console.log('res', res.data);
    return res.data;
  }
  async on_init(req: Request) {
    // console.log('On_init===============', JSON.stringify(req.body));
    creatJson('/on_init.json', req.body);
    const trx_id = req.body?.context?.transaction_id;
    const provider_id = req.body?.message?.order?.provider?.id;
    const full_id = req.body?.message?.order?.fulfillments[0]?.id;
    this.confirmBody = confirmPayload(trx_id, provider_id, full_id);
    // console.log(
    //   'On_ConfirmBodyBy===============',
    //   JSON.stringify(this.confirmBody),
    // );
    return { message: 'on_init was hit' };
  }
  async confirm() {
    // console.log('this.initBody===================', this.confirmBody);
    const res = await axios.post(
      'http://localhost:8001/confirm',
      this.confirmBody,
    );
    creatJson('/confirm.json', this.confirmBody);
    console.log('res', res.data);
    return res.data;
  }
  async on_confirm(req: Request) {
    // console.log('On_Confirm===============', JSON.stringify(req.body));
    creatJson('/on_confirm.json', req.body);
    // const trx_id = req.body?.context?.transaction_id;
    // const provider_id = req.body?.message?.order?.provider?.id;
    // const full_id = req.body?.message?.order?.fulfillments[0]?.id;
    // this.confirmBody = confirmPayload(trx_id, provider_id, full_id);
    // console.log(
    //   'On_ConfirmBodyBy===============',
    //   JSON.stringify(this.confirmBody),
    // );
    return { message: 'on_confirm was hit' };
  }
}
