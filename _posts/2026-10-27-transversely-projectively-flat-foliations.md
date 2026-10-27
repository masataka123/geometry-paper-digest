---
layout: paper
title: Transversely projectively flat foliations
title_ja: 横断的に射影平坦な葉層とトーラス被覆
authors: Stéphane Druel
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DG
arxiv_abstract: We study transversely projectively flat regular foliations on compact K\"ahler manifolds.
topic: algebraic-geometry
tags:
- foliations
- uniformization
- vector-bundles-sheaves
- chern-classes
- singularities
arxiv_id: 2609.06642v1
arxiv_url: https://arxiv.org/abs/2609.06642
arxiv_submitted: '2026-09-06'
arxiv_updated: '2026-09-06'
summary: 横断的に射影平坦な正則葉層について、コンパクト葉の場合のトーラス上の構造と、射影多様体上の一次元葉層の分類を与える。klt特異点を持つコンパクトKähler空間のトーラス被覆定理と、法束のChern類の消滅が中心となる。
abstract_en: We study transversely projectively flat regular foliations on compact K\"ahler manifolds.
summary_en: ''
abstract_ja: コンパクトKähler多様体上の横断的に射影平坦な正則葉層を研究する。余次元2以上で葉がコンパクトなら、有限エタール被覆後にトーラスへの滑らかな射から生じる。また射影多様体上の一次元の場合を三つの構造に分類し、法束のChern類消滅と特異Kähler空間のトーラス被覆を示す。
abstract_source_url: https://arxiv.org/abs/2609.06642
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.06642v1](https://arxiv.org/abs/2609.06642)
- **著者:** Stéphane Druel
- **初回投稿日:** 2026-09-06
- **最終更新日:** 2026-09-06
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

接束が平坦なコンパクトKähler多様体は、複素トーラスの有限エタール商になる。本論文はこの剛性を、葉層に沿う方向ではなく横断方向だけに平坦性を課す状況へ拡張する。

葉が全てコンパクトで余次元が2以上なら、有限エタール被覆後の葉層は複素トーラスへの滑らかな射のファイバーとして記述できる。また葉が一次元で多様体が射影的なら、射影直線束、アーベル多様体上の線形葉層、曲線とアーベル多様体の積上の平坦接続という三つの場合に分かれる。

これらを支えるのが、正則部分の接束が射影平坦なklt Kähler空間のトーラス被覆定理と、横断的射影平坦性から法束の接続およびChern類消滅を導く結果である。射影平坦性とChern類消滅だけから一般の束の平坦性を結論することはできず、その区別が議論の要点となる。

## 背景と問題設定

正則葉層 $\mathcal F$ は、接束の中の可積分な部分束により与えられる。Introductionは横断的平坦性を、概略として葉空間の接束が平坦であること、横断的射影平坦性をその接束が射影平坦であることと説明する。葉空間が常に大域的な滑らかな多様体として存在するという意味ではない。

複素トーラス上の線形葉層や、平坦直線束に値を持つ各点で独立な正則1形式から定まる葉層が基本例となる。submersionによる引戻しでも横断的射影平坦性は保たれる。

## 主結果

### コンパクト葉を持つ場合（Theorem 1.1）

コンパクトKähler多様体 $X$ 上の正則葉層 $\mathcal F$ が余次元2以上、横断的に射影平坦で、全ての葉がコンパクトであるとする。このとき複素トーラス $T$、滑らかな射 $f:Y\to T$、有限エタール被覆 $\gamma:Y\to X$ が存在し

$$
\gamma^{-1}\mathcal F\ \text{は } f\text{ のファイバーにより誘導される。}
$$

横断方向を有限被覆後にトーラスとして大域化する定理である。$X$ 自体がトーラスであるという結論ではなく、葉方向の幾何はファイバーに残る。

### 特異Kähler空間のトーラス被覆（Theorem 1.2）

複素次元2以上のコンパクトKähler空間 $X$ がklt特異点を持ち、正則部分の接束が射影平坦なら、複素トーラスからのquasi-étale被覆

$$
T\longrightarrow X
$$

が存在する。quasi-étaleは余次元1で分岐しない有限被覆を指す。特異空間を扱うため、定理1.1の滑らかな場合のエタール被覆とは区別される。これはコンパクト葉の定理の証明に用いられる。

### 射影多様体上の一次元葉層（Theorem 1.3）

$X$ が滑らかな複素射影多様体で、$\mathcal F$ が次元1・余次元2以上の横断的に射影平坦な正則葉層なら、次のいずれかが成立する。

- アーベル多様体の有限エタール商 $Y$ への $\mathbb P^1$ 束 $X\to Y$ があり、葉層はそのファイバーから誘導される。
- アーベル多様体 $A$ からの有限エタール射 $A\to X$ があり、引戻し葉層が線形である。
- 滑らかな射影曲線 $C$ とアーベル多様体 $B$ からなる積に有限エタール射 $C\times B\to X$ があり、引戻し葉層が射影 $C\times B\to C$ の平坦Ehresmann接続を与える。

葉のコンパクト性はこの定理では仮定されない。一方、次元・余次元と射影性の仮定を外した分類ではない。

### 法束の接続とChern類（Theorem 1.4）

複素多様体 $X$ 上の横断的に射影平坦な正則葉層が余次元 $q\ge2$ で、法束を $N$ とすると、$N$ は接続を持ち

$$
c\_i(N)=0\in H^i(X,\Omega\_X^i),\qquad i\ge1
$$

となる。この定理にはコンパクトKähler性は課されていない。結論の接続が自動的に平坦であると主張するものではない。

## 証明の見取り図

Introductionが明示する論理関係は、特異Kähler空間のトーラス被覆定理をコンパクト葉の構造定理に用いることである。また法束の接続とChern類消滅が中間結果となり、射影平坦接束に関する既知のトーラス商判定の証明も簡略化する。各分類の場合を導く詳細な議論はIntroductionには展開されていないため、ここでは後続節から証明を再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.06642)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.06642v1) — Section 1, pp. 1–2（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.06642v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
