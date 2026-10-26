---
layout: paper
title: 'Rank 3 curve semistable Higgs bundles: the nilpotent case'
title_ja: 階数3の冪零Higgs束に対する曲線半安定性と判別式の消滅
authors: Ugo Bruzzo, Beatriz Graña Otero
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'A Higgs bundle on a smooth complex projective variety is curve semistable if its pullback to every smooth projective curve is semistable. A 2008 conjecture asserts that this is equivalent to slope semistability for some polarization plus vanishing discriminant. One direction is known, the converse holds in rank two, and Huang recently gave a rank-four counterexample. We prove the conjecture for rank three nilpotent Higgs bundles in any dimension. We treat separately the two possible cases: if the Higgs field $\phi$ is nilpotent of order two, there is a divisorial component of a Higgs Grassmannian where nefness of the normalized tautological class forces the discriminant to vanish; otherwise, $\phi$ is regular nilpotent, and then the canonical kernel flag, commutativity and Bogomolov''s lemma on line subbundles of the cotangent bundle complete the proof.'
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- stability
- chern-classes
- positivity
- vector-bundles-sheaves
arxiv_id: 2610.32900v1
arxiv_url: https://arxiv.org/abs/2610.32900
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: 滑らかな複素射影多様体上の階数3のHiggs束について、Higgs場が冪零ならば、すべての曲線への引き戻しの半安定性は偏極に関する半安定性と判別式の消滅に同値であることを示す。階数4では反例がある状況で、階数3の冪零な場合に予想がなお成立することを明らかにする。
abstract_en: ''
summary_en: Pulling a Higgs bundle back to curves gives a strong test of its stability, but this test need not force its discriminant to vanish in general. This paper establishes the missing implication for rank-three bundles with nilpotent Higgs field on smooth complex projective varieties. Its argument distinguishes square-zero fields from generically regular nilpotent fields. The result also applies to all rank-three Higgs bundles on varieties lacking symmetric differentials of degrees two and three, after removing the scalar part of the field.
abstract_ja: 曲線へのあらゆる引き戻しが半安定になるHiggs束に対し、その判別式が消えるかを検討する。この性質と、ある偏極に関する半安定性および判別式の消滅との同値性は一般には階数4の反例によって否定されている。本論文は滑らかな複素射影多様体上の階数3でHiggs場が冪零の場合に同値性を証明する。二乗が零の場合はHiggs Grassmannian上のnefな同伴類を、正則冪零の場合は核の旗と余接束の直線部分束に関するBogomolovの補題を用いる。
abstract_source_url: https://arxiv.org/abs/2610.32900
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32900v1](https://arxiv.org/abs/2610.32900)
- **著者:** Ugo Bruzzo, Beatriz Graña Otero
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Higgs束の半安定性は通常、底空間上の偏極を固定して定義される。これより強い「曲線半安定性」は、滑らかな射影曲線からのすべての射による引き戻しが半安定になることを要求する。本論文は、この曲線による条件がChern類の消滅条件をどこまで強制するかを扱う。

主結果は階数3でHiggs場が冪零の場合の同値定理である。曲線半安定性から判別式の消滅が従い、既知の逆向きの含意と合わせて、ある偏極に関する半安定性と判別式の消滅によって曲線半安定性を特徴づけられる。底空間の次元には制限を置かない。

この階数の条件は背景上重要である。Introductionは、階数4の冪零Higgs束で曲線半安定だが判別式が非零となるHuangの反例を説明する。したがって本結果は一般予想全体の解決ではなく、反例が知られる状況の中で階数3の成立範囲を確定するものである。

## 背景と問題設定

滑らかな複素射影多様体 $X$ 上のHiggs束を $\mathcal E=(E,\phi)$ と書く。ここで $\phi:E\to E\otimes\Omega\_X^1$ は $\phi\wedge\phi=0$ を満たす。階数 $r$ に対して、論文の判別式の規約は

$$
\Delta(E)=c\_2(E)-\frac{r-1}{2r}c\_1(E)^2\in H^4(X,\mathbb Q)
$$

である。曲線への引き戻しではHiggs場を微分写像で縮約する。すべての滑らかな連結射影曲線 $C$ と射 $f:C\to X$ に対し $f^\ast \mathcal E$ が半安定であることを曲線半安定性と呼ぶ。

通常のベクトル束では、曲線半安定性と「ある偏極について半安定かつ判別式が零」との同値性が既知である。Higgs束でも後者から前者への含意は既知だが、逆向きが問題となる。曲線半安定性自体はあらゆる偏極についての半安定性を与えるため、新たな課題は判別式の消滅である。

## 主結果

### 主定理（Theorem 1.1）

階数3の冪零Higgs束について、曲線半安定性と半安定性・判別式消滅は同値である。正確には、任意次元の滑らかな複素射影多様体 $X$ 上で

$$
\mathcal E\text{ が曲線半安定}
\quad\Longleftrightarrow\quad
\mathcal E\text{ がある偏極について半安定},\qquad
c\_2(E)-\frac13 c\_1(E)^2=0
$$

が成り立つ。右辺は最後の二条件を同時に課す。冪零とは、局所ベクトル場 $t$ による縮約 $\phi\_t$ がすべて冪零であることを意味する。単なるベクトル束の半安定性ではなく、Higgs部分束に関する半安定性を使う点にも注意が必要である。

### 対称微分が消える多様体への応用

Introductionは

$$
H^0(X,S^2\Omega\_X^1)=H^0(X,S^3\Omega\_X^1)=0
$$

ならば、階数3の一般のHiggs束にも結論を適用できると述べる。Higgs場から $\frac13\operatorname{tr}(\phi)\otimes\operatorname{id}\_E$ を差し引いても半安定性と判別式は変わらず、この消滅条件の下では跡を除いた場が冪零になるためである。例として滑らかな $\mathbb P^3$ 内の曲面を挙げ、次数が5以上で一般型となる場合も含まれることを指摘する。

## 証明の見取り図

Introductionはまず、階数1と階数2の成分からなる二段のHodge束の系を調べる方針を示す。Higgs場の二乗が零の場合をこの系に帰着し、Higgs Grassmannianの支配的な因子成分上で正規化された同伴類のnef性を利用する。曲面上ではその最高次自己交点が判別式の負の倍数になり、nef性が与える上界と半安定Higgs束のBogomolov不等式による下界を合わせて消滅を導く。

もう一つの場合では、一般点である縮約が正則冪零になる。核から作る標準的な旗、Higgs場の可換性、余接束の直線部分束に関するBogomolovの補題を用いる。二つの場合を区別することが、階数4の反例を単に除外するのではなく、階数3特有の構造から結論を得る要点である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32900)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32900v1) — Section 1, pp. 2–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1、式 (1.1)、対称微分が消える場合への応用
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32900v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
