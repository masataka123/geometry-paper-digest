---
layout: paper
title: Semiample perturbations over arbitrary fields
title_ja: 任意の体上でlc placeを保つ半豊富摂動
authors: Dae-Won Lee
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Assuming projective log resolutions, we construct semiample perturbations over arbitrary fields that preserve all log canonical places. As an application, for divisor classes with finitely generated section rings, we characterize the existence of effective divisors yielding lc or klt pairs in terms of asymptotic orders of vanishing. We also derive minimal model and semiampleness results for generalized threefolds over $F$-finite fields of characteristic $p>5$.
topic: algebraic-geometry
tags:
- singularities
- positivity
- minimal-model-program
- positive-characteristic
arxiv_id: 2610.07908v1
arxiv_url: https://arxiv.org/abs/2610.07908v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  射影的log resolutionの存在を仮定し、任意の体上で半豊富因子を有効因子に取り替えつつ全てのlc placeを保つ。有限生成切断環の場合には、lc・kltな有効代表の存在を漸近消滅次数で特徴づける。さらに標数5より大きいF-finite体上の一般化三次元対へ極小モデルと半豊富性の結果を導く。
abstract_en: ''
summary_en: |-
  A semiample divisor can be represented effectively without introducing new log canonical places, even when the ground field is finite or imperfect. The key statement controls every divisorial log discrepancy at once and requires a projective log resolution. Finite generation then turns asymptotic vanishing into a criterion for effective representatives with prescribed singularities. Applications to generalized threefolds retain separate positivity and characteristic assumptions.
abstract_ja: |-
  有限体や不完全体では、一般の切断を選ぶBertini型の方法に制約がある。本論文は、log resolutionを持つ射影的sub-lc対と半豊富因子に対し、全ての素因子上でlog discrepancyの減少を一様に抑えた有効摂動を基礎体上で構成する。応用として、切断環が有限生成の場合の有効代表の特異性を漸近消滅次数で判定し、正標数の一般化三次元対に対する極小モデル・半豊富性を、明示された正値性と体の仮定の下で得る。
abstract_source_url: https://arxiv.org/abs/2610.07908v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.07908v1](https://arxiv.org/abs/2610.07908v1)
- **著者:** Dae-Won Lee
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

半豊富因子を有効因子で置き換える操作は、対の特異性を保ちながら極小モデル理論を使うための基本手段である。しかし有限体では非空な開集合に基礎体上の点があるとは限らず、正標数では滑らかな多様体上の一般切断にも問題が起こる。本論文は、こうした体の制約を越える摂動を構成する。

中心となる結果は、射影的log resolutionを持つsub-lc対に半豊富因子を加えるとき、全てのlog discrepancyを元の一定割合以上に保てるというものである。そのためsub-lc・sub-klt性だけでなく、log discrepancyが0である全てのlc placeを正確に維持できる。摂動因子も線形同値も基礎体上に定義される。

この構成を固定部分と半豊富部分の分解に組み込むと、有限生成切断環に対する有効代表の判定が得られる。また一般化三次元対を通常のklt対に結びつけ、正標数での極小モデルへ応用する。ただし任意の体上の摂動定理と、F-finite性を必要とする極小モデル定理は別の射程を持つ。

## 背景と問題設定

<p>
subpairでは境界が有効とは限らない。$A_{X,\Delta}(E)$ を $X$ 上の素因子 $E$ のlog discrepancyとし、全てについて非負ならsub-lc、正ならsub-kltと呼ぶ。lc placeはこの値が0の素因子である。係数体を $\mathbb K\in\lbrace\mathbb Q,\mathbb R\rbrace$ とする。
</p>

先行するTanakaの摂動定理などには基礎体に関する仮定があった。ここでは射影的log resolutionの存在を明示的に仮定することで、摂動そのものを任意の体上へ拡張する。

## 主結果

### 全discrepancyを制御する摂動（Theorem 1.2）

<p>
射影的sub-lc対 $(X,\Delta)$ が射影的log resolutionを持ち、$D$ が半豊富な $\mathbb K$-Cartier $\mathbb K$-因子であるとする。任意の $0\lt\epsilon\lt1$ に対し、有効な $D_\epsilon\sim_{\mathbb K}D$ を選び、全ての $X$ 上の素因子に対して次を満たせる。
</p>

<div>
$$
(1-\epsilon)A_{X,\Delta}(E)
\le A_{X,\Delta+D_\epsilon}(E)
\le A_{X,\Delta}(E).
$$
</div>

元の値が0なら新しい値も0であり、元の値が正なら新しい値も正である。従ってlc placeの集合を保つことが、不等式そのものから読み取れる。

### 有効代表の存在判定（Theorem 1.3）

<p>
$D$ を $\kappa(D)\ge0$ の $\mathbb Q$-Cartier因子とする。ある $q>0$ について $qD$ はCartier、切断環 $R(X,qD)$ は次数1で生成され、対と基底イデアル $\mathfrak b(|qD|)$ が射影的log resolutionを持つと仮定する。このとき有効な $G\sim_{\mathbb Q}D$ で $(X,\Delta+G)$ がsub-lcとなるものが存在するための必要十分条件は
</p>

<div>
$$
A_{X,\Delta}(E)\ge v_E(\|D\|)\quad\text{for every }E
$$
</div>

<p>
である。全て狭義不等式なら、またそのときに限りsub-kltな代表が存在する。右辺は有効な $\mathbb Q$-線形同値代表の消滅次数の下限である。有限生成を外すとlcの判定が失敗し得ることもIntroductionで指摘される。
</p>

### 一般化三次元対への応用（Theorem 1.4）

<p>
標数 $p>5$ のF-finite体上の射影的一般化klt三次元対 $(X,B+M)$ を考え、$M$ はnefな $\mathbb K$-Cartier b-divisorとする。$D=K_X+B+M_X$ が擬有効で、$M$ が降りるモデル $\pi:Y\to X$ と $t\in\mathbb K$、$t>-1$ が存在し、
</p>

<div>
$$
M_Y+t\pi^*D
$$
</div>

が半豊富、またはnefかつbigなら、極小モデルが存在する。

<p>
さらに $D$ がbigなら極小モデルが存在し、$\mathbb K=\mathbb Q$ なら良い極小モデルと十分可除な倍数の切断環の有限生成を得る。$\mathbb Q$ 係数で $D$ がnefかつbigなら $D$ は半豊富である。基礎体の完全性や $X$ の $\mathbb Q$-factorial性は仮定されないが、F-finite性はこの応用で必要である。
</p>

## 証明の見取り図

log resolution上で単純正規交差境界を用意し、まずTanakaの定理が使える分離的拡大へ移る。得られた因子を有限Galois拡大へ降ろし、共役の平均とノルムによって基礎体上の因子と線形同値を構成する。MurayamaのΓ構成と純非分離降下が任意の体への移行を担う。大きな整数倍を摂動してから割ることで、Theorem 1.2の一様なdiscrepancy評価を得る。

有限生成の場合は、モデル上の固定部分が漸近消滅次数を計算することを利用する。一般化対への応用では正値性を使って通常のklt境界を作り、既存のklt三次元極小モデル定理を適用した後、共通モデル上のdiscrepancyを比較する。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.07908v1
- **Introduction:** Section 1、pp. 1–3。
- **主要定理:** Theorems 1.2、1.3、1.4。中心式は(1.1)–(1.3)。
- **論文構成:** Section 2が降下、Section 3.1が摂動、3.2が有効代表、3.3が一般化対への応用。
- **確認バージョン:** v1。後続の証明全体は検証していない。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
