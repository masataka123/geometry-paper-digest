---
layout: paper
title: There are no Miyaoka--Kobayashi octics
title_ja: Miyaoka–Kobayashi八次曲線の非存在
authors: Alexandru Dimca, Piotr Pokora
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $C$ be a reduced plane curve of degree $n$ with only ADE singularities. Using K\"ahler-Einstein metrics, Kobayashi proved an upper bound, in terms of $n$, for a sum of local invariants of the singular points of $C$. For even $n$ this bound had been obtained earlier by Hirzebruch and Ivinskis. Curves of even degree for which equality holds are called Miyaoka-Kobayashi curves, and the only known examples are three types of plane sextics. We show that there are no Miyaoka--Kobayashi curves of degree $8$, and additionally that a Miyaoka-Kobayashi curve of degree $10$ cannot be free. The key new ingredient is a new linear constraint on the singularities of such curves, obtained by differentiating Langer's orbifold Bogomolov-Miyaoka-Yau inequality.
topic: algebraic-geometry
tags:
- chern-classes
- singularities
- uniformization
arxiv_id: 2610.28135v1
arxiv_url: https://arxiv.org/abs/2610.28135
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: ADE特異点だけを持つ平面曲線で、Miyaoka–Kobayashi不等式の等号を実現する八次曲線が存在しないことを示す。係数を動かしたorbifold Bogomolov–Miyaoka–Yau不等式を微分して新しい線形制約を得て、十次の場合にも自由曲線を除外する。
abstract_en: Let $C$ be a reduced plane curve of degree $n$ with only ADE singularities. Using K\"ahler-Einstein metrics, Kobayashi proved an upper bound, in terms of $n$, for a sum of local invariants of the singular points of $C$. For even $n$ this bound had been obtained earlier by Hirzebruch and Ivinskis. Curves of even degree for which equality holds are called Miyaoka-Kobayashi curves, and the only known examples are three types of plane sextics. We show that there are no Miyaoka--Kobayashi curves of degree $8$, and additionally that a Miyaoka-Kobayashi curve of degree $10$ cannot be free. The key new ingredient is a new linear constraint on the singularities of such curves, obtained by differentiating Langer's orbifold Bogomolov-Miyaoka-Yau inequality.
summary_en: ''
abstract_ja: 複素射影平面内の被約ADE曲線について、Miyaoka–Kobayashi不等式の等号を満たす曲線を調べる。可変係数のLanger不等式から特異点の局所不変量に新しい等式を導き、八次の場合の候補をすべて排除する。十次の場合は存在問題を残すが、Tjurina数と自由性欠損をさらに制限し、自由曲線ではないことを示す。
abstract_source_url: https://arxiv.org/abs/2610.28135
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28135v1](https://arxiv.org/abs/2610.28135)
- **著者:** Alexandru Dimca, Piotr Pokora
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Miyaoka–Kobayashi曲線とは、平面曲線の特異点の複雑さを次数で抑える不等式において等号を達成する偶数次数の曲線である。六次では三種類が知られるが、八次以上の例は知られていなかった。八次以上の等号例は分岐二重被覆を通じて球商曲面と結びつくため、その存在は特異点の数値条件だけの問題ではない。

本論文は、八次のMiyaoka–Kobayashi曲線が存在しないと述べる。新しい着想は、既知の不等式を固定された係数で使うだけでなく、境界係数を動かし、等号点で微分することである。それによって、従来の等号条件とは別の線形制約が特異点に課される。

この制約は候補を有限個へ絞り、八次では古典的な平面曲線論が全候補を排除する。十次では候補がまだ多く、存在・非存在の完全な決着には至らない。ただし自由曲線にはなれず、Tjurina数の上限も改善される。八次の非存在と十次の部分的制約を区別する必要がある。

## 背景と問題設定

$C\subset\mathbb P^2$をADE特異点のみを持つ次数$n$の被約複素曲線とする。特異点$p$のMilnor数とTjurina数は一致し、$\mu\_p=\tau\_p$と書く。局所二重被覆のADE曲面特異点に対応する有限群を$G\_p\subset SU(2)$とする。基礎となる不等式は

$$
\sum\_{p\in\operatorname{Sing}(C)}\left(\mu\_p+1-\frac1{|G\_p|}\right)\le\frac56n^2-n
$$

である。偶数$n\ge6$で等号が成り立つ曲線をMK曲線と呼ぶ。従来の六次の分類に対し、八次の存在は長く未解決だった。

全Tjurina数を$\tau(C)=\sum\_p\tau\_p$とする。次数$n=2m$のADE曲線では自由性欠損が$\nu(C)=3m^2-3m+1-\tau(C)$で与えられ、$\nu=0$がfree、$\nu=1$がnearly freeに対応する。

## 主結果

### 特異点への新しい等式（Theorem 1.1）

偶数次数$n\ge8$のMK曲線では

$$
3\tau(C)-\sum\_{p\in\operatorname{Sing}(C)}d\_p=2n^2-3n
$$

が成立する。補正項は$A\_k$で$d\_p=0$、$D\_k$で

$$
d\_p=\frac{3(k-3)}{2(k-2)},
$$

$E\_6,E\_7,E\_8$ではそれぞれ$3/2,15/8,9/4$である。単なる不等式の改良ではなく、等号曲線が満たす追加の数値等式である。

### Tjurina数と特異点型の制約（Corollary 1.2）

$n=2m\ge8$なら

$$
\tau(C)\ge\frac{8m^2-6m}{3},\qquad \nu(C)\le\frac{m^2-3m+3}{3}
$$

となる。さらに$3\nmid n$なら$D$型または$E$型の特異点を少なくとも一つ持ち、その個数は$\frac43(m^2-3m+3)$以下である。八次なら$35\le\tau(C)\le37$と$\nu(C)\le2$が必要になる。

### 八次での非存在（Theorem 1.3）

Miyaoka–Kobayashi曲線で次数8のものは存在しない。新しい等式、MK条件、既知のTjurina数の上限を合わせると特異点の候補は18種類となるが、どれも射影平面の曲線として実現できない。この実現不能性が、数値的な絞り込みを非存在定理へ進める部分である。

### 十次での非自由性（Theorem 1.4）

次数10のMK曲線が存在するとすれば

$$
57\le\tau(C)\le60,\qquad1\le\nu(C)\le4
$$

を満たし、少なくとも一つの$D$型または$E$型特異点を持つ。したがってfreeではない。Introductionでは十次の数値候補が284種類残ると説明され、十次全体の非存在は主張されていない。

## 証明の見取り図

$(\mathbb P^2,\alpha C)$に対するLangerのorbifold不等式で、MK条件は$\alpha=1/2$における等号に当たる。$n\ge8$ではこの係数は許容区間の内点であり、両辺がその近傍で滑らかに変化する。非負の差が内点で零になることから微分も零となり、Theorem 1.1を得る。

その後は種数公式、Bézoutの定理、Plücker公式、射影双対を使って八次の候補を調べる。Introductionによれば数値型の列挙などに小規模な記号計算を用いるが、残る幾何学的排除は手計算による。本記事では付録のコードを実行せず、Introductionの説明範囲を紹介している。

## 原論文との対応

- **Abstractページ:** [There are no Miyaoka--Kobayashi octics](https://arxiv.org/abs/2610.28135)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28135v1) — Section 1, pp. 1–2。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.4、Corollary 1.2。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28135v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
