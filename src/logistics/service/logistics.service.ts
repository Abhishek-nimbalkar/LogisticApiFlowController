// import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { CreateLogisticDto } from './dto/create-logistic.dto';
// import { UpdateLogisticDto } from './dto/update-logistic.dto';
import { searchPayload } from 'payload/searchPayload';
import axios from 'axios';
import { Request } from 'express';
import { initPayload } from 'payload/initPayload';
import { updatePayload } from 'payload/updatePayload';
import { confirmPayload } from 'payload/confirmPayload';
import { creatJson } from 'src/utils/fileWrite';
import { statusPayload } from 'payload/statusPayload';
@Injectable()
export class LogisticsService {
  searchBody: any;
  initBody: any;
  confirmBody: any;
  updateBody: any;
  statusBody: any;
  async search(req: Request) {
    console.log('something in search');
    const url: string = req.body.lsp_uri + '/search';
    this.searchBody = searchPayload(req.body.bap_uri);
    const res = await axios.post(url, this.searchBody);
    creatJson('/search.json', this.searchBody);
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
      req.body?.context?.bap_uri,
    );
    // console.log(
    //   'initBody=========',
    //   JSON.stringify(this.initBody),
    //   '===========',
    // );
    return { message: 'on_search was hit' };
  }
  async init(req: Request) {
    // console.log('this.initBody===================', this.initBody);
    const url: string = req.body.lsp_uri + '/init';
    const res = await axios.post(url, this.initBody);
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
    const quote = req.body?.message?.order?.quote;
    const billing = {
      created_at: this.initBody.message?.order?.billing?.created_at,
      updated_at: this.initBody.message?.order?.billing?.updated_at,
    };
    this.confirmBody = confirmPayload(
      trx_id,
      provider_id,
      full_id,
      quote,
      billing,
      req.body?.context?.bap_uri,
    );
    // console.log(
    //   'On_ConfirmBodyBy===============',
    //   JSON.stringify(this.confirmBody),
    // );
    return { message: 'on_init was hit' };
  }
  async confirm(req: Request) {
    // console.log('this.initBody===================', this.confirmBody);
    const url: string = req.body.lsp_uri + '/confirm';
    const res = await axios.post(url, this.confirmBody);
    creatJson('/confirm.json', this.confirmBody);
    console.log('res', res.data);
    return res.data;
  }
  async on_confirm(req: Request) {
    // console.log('On_Confirm===============', JSON.stringify(req.body));
    creatJson('/on_confirm.json', req.body);
    const order_id = req.body?.message?.order?.id;
    const trx_id = req.body?.context?.transaction_id;
    const full_id = req.body?.message?.order?.fulfillments[0]?.id;
    this.updateBody = updatePayload(
      order_id,
      trx_id,
      full_id,
      req.body?.context?.bap_uri,
    );
    return { message: 'on_confirm was hit' };
  }
  async update(req: Request) {
    const url: string = req.body.lsp_uri + '/update';
    const res = await axios.post(url, this.updateBody);
    creatJson('/update.json', this.updateBody);
    console.log('res', res.data);
    return res.data;
  }
  async on_update(req: Request) {
    // console.log('On_Confirm===============', JSON.stringify(req.body));
    creatJson('/on_update.json', req.body);
    const order_id = req.body?.message?.order?.id;
    const trx_id = req.body?.context?.transaction_id;
    this.statusBody = statusPayload(
      order_id,
      trx_id,
      req.body?.context?.bap_uri,
    );
    return { message: 'on_update was hit' };
  }
  async status(req: Request) {
    const url: string = req.body.lsp_uri + '/status';
    const res = await axios.post(url, this.statusBody);
    creatJson('/status.json', this.statusBody);
    console.log('res', res.data);
    return res.data;
  }
  async on_status(req: Request) {
    // console.log('On_Confirm===============', JSON.stringify(req.body));
    creatJson('/on_status.json', req.body);
    // const order_id = req.body?.message?.order?.id;
    // const trx_id = req.body?.context?.transaction_id;
    // const full_id = req.body?.message?.order?.fulfillments[0]?.id;
    // this.updateBody = updatePayload(order_id, trx_id, full_id);
    return { message: 'on_status was hit' };
  }
}
