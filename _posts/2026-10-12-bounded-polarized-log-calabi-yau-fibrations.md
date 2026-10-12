---
layout: paper
title: Boundedness of polarized log Calabi-Yau fibrations
title_ja: 偏極log Calabi–Yauファイブレーションの有界性
authors: Haoran Zhu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We investigate the boundedness problem for log Calabi-Yau fibrations whose bases and general fibers are bounded. We improve the results in arXiv:2504.05243 from birational boundedness to actual boundedness, which confirms a conjecture of Birkar and Hacon when the boundary coefficients belong to a fixed finite rational set. We also get a new proof for the birational boundedness result in arXiv:2504.05243 which is substantially more conceptual.
topic: algebraic-geometry
tags:
- birational-geometry
- calabi-yau-geometry
- moduli
- singularities
arxiv_id: 2610.13178v1
arxiv_url: https://arxiv.org/abs/2610.13178
arxiv_submitted: '2026-10-09'
arxiv_updated: '2026-10-09'
summary: 境界係数が固定有限有理数集合に属する弱偏極log Calabi–Yauファイブレーションについて、次元・特異性・基底の次数・一般ファイバーの体積を制御すると全空間と指定された台がlog boundedになることを示す。一般ファイバーの不正則数に関する仮定を除き、余次元1での有界性から実際の有界性へ進む。
abstract_en: ''
summary_en: Controlling a fibration’s base and general fibre does not immediately bound its total space. Zhu uses restrictions to curves to control the moduli map and the locus where a well-behaved family fails to exist. This upgrades earlier boundedness results under a finite rational coefficient assumption. The theorem removes an irregularity restriction on the general fibre rather than imposing a new vanishing condition.
abstract_ja: 基底と一般ファイバーを数値的に制御したlog Calabi–Yauファイブレーションの全空間が、有界な族に入るかを扱う。主定理は固定有限有理数集合から境界係数を選び、一様なε-lc条件を課した弱偏極ファイブレーションについてlog boundednessを与える。曲線上への制限で悪い部分の次数とモジュライ写像を制御し、偏極を含む族を大きな開集合上で有界にして全体へ戻す。先行結果に必要だった一般ファイバーの不正則数の消滅は仮定しない。
abstract_source_url: https://arxiv.org/abs/2610.13178
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.13178v1](https://arxiv.org/abs/2610.13178)
- **著者:** Haoran Zhu
- **初回投稿日:** 2026-10-09
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ファイブレーションでは、基底と一般ファイバーがそれぞれ有界な族に属していても、両者をどう組み合わせるかが全空間の複雑さを左右する。本論文はlog Calabi–Yauファイブレーションについて、偏極と特異性の一様な制御から全空間の有界性を導く。

先行研究は余次元1でのlog boundednessを示し、一般ファイバーの不正則数が消える場合には実際のlog boundednessも得ていた。本論文は境界係数が固定有限有理数集合に属する条件のもとで、不正則数の仮定を取り除く。

証明は既存の高次元有界性定理をそのまま使うのではなく、曲線上のファイブレーションを出発点とする。曲線への制限でモジュライ写像と悪い部分を制御し、その情報を基底全体へ戻すことが、Introductionで強調される新しい経路である。

## 背景と問題設定

<p>複素数体上で $f:(X,B),A\to(Z,H)$ を考える。$A$ は $Z$ 上相対的にampleな整係数因子、$H\ge0$ は基底上のvery ample因子であり、ある $\mathbb Q$-Cartier因子 $N$ について</p>

<div>
$$
K_X+B\sim_{\mathbb Q}f^*N
$$
</div>

<p>が成り立つ。通常の偏極log Calabi–Yauファイブレーションは $H-N$ のample性を要求し、「弱」偏極の場合はpseudo-effectiveであることだけを要求する。</p>

<p>固定データ $d\in\mathbb N$、$v,r,\varepsilon\in\mathbb Q_{>0}$、$\Phi\subset[0,1]\cap\mathbb Q$ に対し、$(X,B)$ は次元 $d$ の射影的 $\varepsilon$-lc対で、境界係数が $\Phi$ に属し、一般ファイバー $F$ について</p>

<div>
$$
H^{\dim Z}\le r,\qquad \operatorname{vol}_F(A|_F)\le v
$$
</div>

<p>を仮定する。以下では $\Phi$ は有限集合である。単なるDCC集合まで一般化した定理と読み替えてはならない。</p>

## 主結果

### 主定理：全空間と境界の台の有界性（Theorem 1.3）

<p>固定した $d,\Phi,v,r,\varepsilon$ を満たすすべての弱偏極log Calabi–Yauファイブレーションについて、couple</p>

<div>
$$
\bigl(X,\operatorname{Supp}(B+f^*H)\bigr)
$$
</div>

はlog boundedな族をなす。結論は余次元1での双有理な制御にとどまらず、全空間と指定した因子の台を有界な族に含めるものである。一般ファイバーの不正則数の消滅は要求しない。一方で、主定理の結論に任意の偏極因子そのものの全体まで含めるとは述べていない。

### 証明の外部入力：曲線を基底とする場合（Theorem 1.4）

<p>同じ固定データで基底が曲線 $C$ の場合、対 $(X,B)$ の族は有界となる。さらに固定データだけに依存する $\lambda$ と正整数 $l$ があり、相対線形同値 $A'\sim_C A$ を満たす因子で</p>

<div>
$$
\operatorname{vol}_X(A')\le\lambda,\qquad A'\text{ はample},\qquad
A'-f^*H\text{ はpseudo-effective},\qquad lA'\text{ はvery ample}
$$
</div>

<p>となるものを選べる。Introductionはこれを主要な外部有界性入力として位置付け、先行研究の曲線上の議論から得る。この定理を、高次元の場合の新しい主結論と同じ新規性で紹介するものではない。</p>

## 証明の見取り図

<p>$H$ の一般完全交差曲線 $C$ へ制限し、traditional stable minimal modelの族にならない部分の因子的成分との交差数を制御する。これにより次数が有界な被約因子 $D$ を選び、$(Z,D)$ をlog boundedにする。</p>

<p>$U=Z\setminus D$ の大きな開集合上で定まる族のcoarse moduli写像を、曲線上の制限から有界にする。必要に応じて $D$ を有界な線形系の範囲で拡大し、coarse写像を $U$ 上で正則にしたうえで、モジュライスタックへの持ち上げを延長する。この段階で基底の開集合上の族と偏極をともに制御できる。</p>

その後、標準的な有界性の議論で全空間へ戻る。Introductionは、曲線への制限とモジュライ写像の延長が、従来の双有理有界性の証明をより概念的にする役割も担うと説明する。

## 原論文との対応

- **Abstractページ:** [Boundedness of polarized log Calabi-Yau fibrations](https://arxiv.org/abs/2610.13178)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.13178v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4; Definitions 1.1–1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.13178v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
