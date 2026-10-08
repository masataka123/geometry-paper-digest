---
layout: paper
title: Anticanonical Volumes of Terminal and Canonical Gorenstein Fano Fourfolds
title_ja: Terminal・canonical Gorenstein Fano四次元多様体の反標準体積
authors: Pinxian Bie, Zhengjie Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Let $X$ be a complex $\mathbb{Q}$-factorial Gorenstein Fano fourfold of Picard number one. We prove that, if $X$ has terminal singularities, then $(-K_X)^4\le648$, with equality precisely for $\mathbb{P}(1,1,1,1,2)$. If the singularities are canonical, we obtain $(-K_X)^4\le7332$. Under the additional assumption that a primitive Weil polarization is Cartier outside finitely many points, the latter bound improves to the sharp bound $1024$; if its non-Cartier locus has dimension at most one, we obtain $6084$.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- stability
- foliations
- positivity
arxiv_id: 2610.09419v1
arxiv_url: https://arxiv.org/abs/2610.09419v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  Q-factorialかつGorensteinでPicard数1のFano四次元多様体について、terminalなら反標準体積の鋭い上界648と等号例を決定する。Canonicalの場合には上界7332を与え、原始Weil偏極の非Cartier部分の次元を制限すると1024または6084へ改善する。
abstract_en: ''
summary_en: |-
  Quantitative bounds on singular Fano fourfolds require more information than qualitative boundedness alone. The authors combine tangent-sheaf slope data, jet estimates, and foliation geometry to study a restricted class with Picard number one. They obtain a sharp terminal bound and identify its unique equality model. For canonical singularities they provide a general estimate and stronger bounds when the non-Cartier locus of a primitive Weil class is small.
abstract_ja: |-
  複素数体上のQ-factorial Gorenstein Fano四次元多様体でPicard数が1の場合を扱う。Terminal特異点を持つとき、反標準体積は648以下であり、等号は重み付き射影空間P(1,1,1,1,2)に限る。Canonical特異点の場合の上界は7332であるが、原始Weil偏極が有限個の点の外でCartierなら鋭い上界1024を得る。非Cartier部分の次元が高々1の場合には6084を得る。
abstract_source_url: https://arxiv.org/abs/2610.09419v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09419v1](https://arxiv.org/abs/2610.09419v1)
- **著者:** Pinxian Bie, Zhengjie Yu
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体の有界性は、特異点を一定の範囲に制限すれば反標準体積にも上界があることを保証する。しかし最適な数値と、その値を実現する多様体を決めるには、より具体的な幾何が必要になる。

この論文は、Q-factorial、Gorenstein、Picard数1という条件の下で四次元の場合を調べる。Terminal特異点なら体積の最大値648を証明し、等号を達成する重み付き射影空間を一意に決定する。孤立特異点だけを仮定する結果ではない。

Canonical特異点では、同じ方法の一部が弱くなるため、一般には7332という上界を得る。この値の最適性は主張されない。一方、原始Weil偏極の非Cartier部分が有限なら上界1024は鋭く、非Cartier部分の次元が高々1なら6084となる。これらは追加仮定の異なる結果である。

## 背景と問題設定

以下では複素数体上で考える。$H=-K_X$、$V=H^4$と置く。Canonicalの場合も含め、$X$はQ-factorial Gorenstein Fano四次元多様体、$\rho(X)=1$である。さらに$\operatorname{Cl}(X)/\mathrm{tors}=\mathbb Z A$の正の生成元$A$を取り、$-K_X\sim_{\mathbb Q}qA$と書く。

三次元での鋭い体積評価に比べ、四次元では一般の有界性から得られる明示的な定数が非常に大きい。論文は対象を上記のクラスに絞り、接束のHarder–Narasimhanスロープと代数的葉層、特異Riemann–Rochを組み合わせて上界を縮める。

## 主結果

### Terminalの場合の鋭い評価（Theorem 1.1）

上の$X$がterminalなら、

<div>
$$
(-K_X)^4\le648,
\qquad
(-K_X)^4=648\quad\Longleftrightarrow\quad
X\simeq\mathbb P(1,1,1,1,2).
$$
</div>

最大体積だけでなく、それを実現する多様体まで特定する点が主結果である。Q-factorial性、Gorenstein性、Picard数1の条件を外した一般のterminal Fano四次元多様体についての主張ではない。

### Canonicalの場合（Theorem 1.2）

Terminalという仮定をcanonicalに弱めると、

<div>
$$
(-K_X)^4\le7332
$$
</div>

を得る。Introductionはこの上界を最適とはしていない。比較対象として$\mathbb P(1,1,12,28,42)$の体積3528を挙げ、トーリックcanonical Fano四次元の場合には3528が既知の鋭い上界であると説明する。したがって7332と3528の差は、今回の一般的なクラスでは未解消である。

### 非Cartier部分が有限の場合（Theorem 1.3）

Theorem 1.2の仮定に加え、原始Weil偏極$A$が有限集合の外でCartierなら、

<div>
$$
(-K_X)^4\le1024.
$$
</div>

この値は$\mathbb P(1,1,1,1,4)$が達成する。ただし、すべての等号例の分類は主張されていない。特に孤立canonical特異点だけを持つ場合に適用できる。

### 非Cartier部分が一次元以下の場合（Introductionで述べられるCorollary 8.2）

同じcanonicalの仮定の下で、$\dim\operatorname{NCart}(A)\le1$なら

<div>
$$
(-K_X)^4\le6084
$$
</div>

となる。非Cartier部分の大きさを制限することが、体積評価を改善する別の軸となる。

## 証明の見取り図

接束のスロープを$V$で正規化し、階数を重複込みで数えた値を$\lambda_1\ge\cdots\ge\lambda_4>0$とすると、$\sum_i\lambda_i=1$である。Introductionで示されるjet評価は

<div>
$$
V\le\frac{625}{256\prod_{i=1}^4\lambda_i}
$$
</div>

であり、半安定性を一律に仮定せず全スロープを保持する。小さいスロープが現れる場合には、対応する低階数葉層の幾何を調べて制御する。

Terminalの場合は$\lambda_1\le1/3$、$\lambda_1+\lambda_2<2/3$という制約とWeil指数・体積の整除性により候補を絞る。648を超えて残る686と729をjet評価とpencilの障害で除き、等号では切断環の重みを決定する。Canonicalの場合には階数3の葉層に対する別の評価と整数条件を用いる。ここで述べるのはIntroductionの方針であり、有限計算や後続節の証明を再検証したものではない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.09419v1](https://arxiv.org/abs/2610.09419v1)
- **Introduction:** Section 1、pp. 2–4。
- **主結果:** Theorems 1.1–1.3、Introductionで引用されるCorollary 8.2。
- **論文構成:** Sections 2–3の層・jetの道具、Section 4の葉層、Sections 5–6のterminal評価と等号、Sections 7–8のcanonical評価へ進む。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
