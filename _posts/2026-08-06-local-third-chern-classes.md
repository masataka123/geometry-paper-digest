---
layout: paper
title: "Point Singularities and Local Third Chern Classes for Rank-Two Torsion-free Sheaves on Threefolds"
title_ja: "三次元多様体上の階数2 torsion-free層の点特異点と局所第3 Chern類"
authors: "Xuemiao Chen"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
topic: differential-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - moduli
  - chern-classes
arxiv_id: "2607.01402v1"
arxiv_url: "https://arxiv.org/abs/2607.01402v1"
arxiv_submitted: "2026-07-01"
arxiv_updated: "2026-07-01"
summary: >-
  複素三次元多様体上の階数2 torsion-free層の孤立点特異点が担う局所第3 Chern類を、有限長の局所代数データとして調べる。変形不変性、境界球面上の束の位相的不変量とのparity対応、相対$K$理論的chargeとの一致を示し、Hermitian--Yang--Millsモジュライの境界現象へ応用する。
abstract_en: ""
summary_en: >-
  The paper isolates an integer attached to an isolated singularity of a rank-two torsion-free sheaf on a complex threefold. A formula on the total space of a flat family proves that the integer is stable under deformation, a feature special to rank two. Its parity detects a topological class of the smooth bundle on a surrounding sphere, and a self-dual complex identifies it with a relative K-theory charge. In the reflexive case, the same quantity is related to a presentation degree, a Fitting scheme, and Buchsbaum--Rim multiplicity, with applications to boundary points of Hermitian--Yang--Mills moduli.
abstract_ja: >-
  gauge理論の特異点形成を動機として、複素三次元多様体上の階数2 torsion-free層の孤立点特異点が担う局所第3 Chern類を研究する。この量を有限長の局所代数で定義し、全空間のデータから計算できるため変形不変であること、そのparityが境界球面上の滑らかな階数2複素ベクトル束の位相的不変量を復元すること、自己双対複体の相対$K$理論的chargeと一致することを示す。reflexive層の場合にはFitting schemeやBuchsbaum--Rim重複度とも関係づける。
abstract_source_url: "https://arxiv.org/abs/2607.01402v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.01402v1](https://arxiv.org/abs/2607.01402v1)
- **著者:** Xuemiao Chen
- **初回投稿日:** 2026年7月1日
- **最終更新日:** 2026年7月1日（v1）
- **主分類・副分類:** Differential Geometry (math.DG); Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

階数2のベクトル束が退化してtorsion-free層になるとき、複素三次元では孤立点にChern類の局所寄与が集中しうる。この現象はHermitian--Yang--Mills接続のモジュライ空間をコンパクト化するときの点特異点とも結びつく。

本論文は、単位球$B\subset\mathbb C^3$上の階数2 torsion-free層$F$と孤立特異点$x$に整数$c_3(F,x)$を割り当てる。これは$\mathcal Ext^1$とdouble dualとの差の長さから直接定義され、一般的な局所Chern類理論をこの設定で具体化する。

主要な結論は、この局所量がflat familyの全空間上のデータで計算でき、したがって変形で保存されることである。さらにその偶奇は小さな境界5次元球面上の滑らかな階数2束の位相的不変量を復元し、自己双対複体が定める相対$K$群のchargeとも一致する。

reflexiveの場合には、局所量はpresentation mapの位相的degree、Fitting schemeの長さ、transpose presentationのBuchsbaum--Rim重複度としても記述される。単純な変形不変性は階数2に特有であり、高階数へ同じ形で一般化できないこともIntroductionで強調される。

## 背景と問題設定

$F$を$B\subset\mathbb C^3$上の階数2 torsion-free層とする。孤立特異点$x$での局所第3 Chern類は

$$
c_3(F,x)=\ell(\mathcal Ext^1(F,\mathcal O_B),x)
-2\ell(F^{**}/F,x)
$$

と定義される。第一項はdualizationの欠陥、第二項はreflexive hullとの差を有限長で測る。reflexiveなら第二項は消えるが、bundleの退化で現れる局所モデルには一般のtorsion-free層が不可欠である。

## 主結果

### 変形不変性と障害

Introductionでは概略として次のように述べられている。円板でパラメータ付けられた階数2 torsion-free層のflat familyで、各fiberの特異点が孤立しているとき、局所第3 Chern類の総和は全空間上の有限長データから計算でき、familyの中で一定になる。

この結果は、特異層が局所自由な層またはreflexive層の極限になれるかどうかに制約を与える。証明はまずreflexive familyを扱い、階数2 reflexive層の自己双対性を用いた後、一般のtorsion-free caseをdouble dualと商へ分解する。

### parityの位相的解釈

孤立点を囲む$S^5$上の滑らかな階数2複素ベクトル束に位相的不変量を対応させると、その値は$c_3(F,x)$のparityから復元される。特にodd parityの層は、Hermitian--Yang--Mills接続のmod gaugeモジュライ空間の境界で孤立点特異点として現れないという帰結をもつ。

### 相対$K$理論と古典的不変量

$F$から作る、特異点以外でexactな自己双対複体は$(B,S^5)$の相対$K$類を定める。対応する相対$K$群をBott類で$\mathbb Z$と同一視したとき、その局所chargeは$c_3(F,x)$に等しい。

さらに$F$がreflexiveなら、同じ整数は局所presentation mapのdegree、Fitting schemeの長さ、transpose presentationのBuchsbaum--Rim重複度と一致する。これにより局所代数、境界位相、相対$K$理論の三つの記述が結ばれる。

## 証明の見取り図

変形不変性では、reflexive familyに対して自己双対性から全空間上の有限長表示を作り、一般のtorsion-free familyは$F\to F^{**}$と有限長商を通じて帰着する。parityについては孤立特異点を単純特異点へ摂動し、そこでの明示計算、変形不変性、加法性を組み合わせる。

相対$K$理論では、特異点を除いてexactな自己双対複体を$(B,S^5)$上のclassとし、有限長加群のGrothendieck群およびBott generatorとの対応を使う。reflexive caseでは局所presentationを選び、同じ長さをFitting idealとBuchsbaum--Rim理論から読み替える。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.01402v1](https://arxiv.org/abs/2607.01402v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Introductionでは各主結果を節ごとの概略として説明し、変形不変性の精密な定式化をSection 2へ送る
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
