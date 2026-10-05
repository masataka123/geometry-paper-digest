---
layout: paper
title: K-stability of a class of smooth Fano complete intersections
title_ja: 二次超曲面内のFano完全交叉のK安定性
authors: Yijue Hu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  We develop an approach to study K-stability of Fano varieties by estimating the local stability threshold along a reducible zero-dimensional subscheme on a smooth curve. As an application, we we show that all smooth index-one Fano hypersurfaces in quadrics are K-stable, when the dimension is higher than one. To prove it, we apply the Abban-Zhuang method to reduce the stability problem to lower dimensions. Specifically, we construct suitable admissible flags such that the last term of the Abban-Zhuang estimate is a local stability threshold along multiple points on a smooth curve, and give a convex geometric interpretation of the estimate.
topic: algebraic-geometry
tags:
- k-stability
- fano-varieties
- kahler-einstein-metrics
arxiv_id: 2610.03311v1
arxiv_url: https://arxiv.org/abs/2610.03311
arxiv_submitted: '2026-10-02'
arxiv_updated: '2026-10-02'
summary: |-
  射影空間内の次数 $(2,n)$ の滑らかな完全交叉が、すべての $n>1$ でK安定であることを示す。曲線上の複数点に沿う局所安定性閾値を評価することで、従来の高次元の制約を外す。この族の全滑らかなメンバーにKähler–Einstein計量が存在することも従う。
abstract_en: ''
summary_en: |-
  The stability problem here concerns every smooth member of a specific complete-intersection family, including its low-dimensional cases. The key calculation retains several intersection points when a flag reduces the problem to a curve. A convex body organizes the resulting estimates. The theorem also gives Kähler–Einstein metrics through the established stability–existence correspondence.
abstract_ja: |-
  Fano多様体のK安定性を、滑らかな曲線上の可約な零次元部分スキームに沿う局所安定性閾値から調べる方法を与える。Abban–Zhuang法に適した旗を構成し、曲線上の複数点での評価と凸幾何を結び付ける。応用として、次元が1より大きい、二次超曲面内の指数1の滑らかなFano超曲面のK安定性を証明する。
abstract_source_url: https://arxiv.org/abs/2610.03311
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.03311v1](https://arxiv.org/abs/2610.03311)
- **著者:** Yijue Hu
- **初回投稿日:** 2026-10-02
- **最終更新日:** 2026-10-02
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体のK安定性は、モジュライの構成とKähler–Einstein計量の存在を結ぶ。しかし「一般のメンバー」が安定であることと「すべての滑らかなメンバー」が安定であることには隔たりがあり、完全交叉では後者の判定が難しい。

本論文は、$\mathbb P^{n+2}$ における次数2と次数 $n$ の超曲面の滑らかな完全交叉について、すべての $n>1$ でK安定性を示す。従来の指数1・余次元2の結果には高次元という制約があったが、この特別な族では低次元も含めて扱える。

方法の中心は、Abban–Zhuang法による次元の引き下げを、曲線上の一点だけで終わらせず複数点を保って行うことにある。局所安定性閾値の評価を凸体の重心と結び付けることで、具体的な安定性問題に使える仕組みを整える。

## 背景と問題設定

Introductionは、GIT安定性とK安定性が一般には一致せず、滑らかなFano完全交叉でも系統的な判定が十分でないことを出発点とする。先行するZhuangの指数1の結果は双有理超剛性を使い、余次元2では $n\ge12$ が十分条件として挙げられている。

本論文が扱う族は

<div>
$$
X\in\mathcal X_{2,n},\qquad X=Q_2\cap H_n\subset\mathbb P^{n+2},\qquad n>1
$$
</div>

である。$Q_2,H_n$ はそれぞれ次数2、次数 $n$ の超曲面であり、定理で要求されるのは交叉 $X$ の滑らかさである。二次超曲面側に不要な追加の滑らかさを課すことはしない。

## 主結果

### 主定理：全滑らかなメンバーのK安定性（Theorem A）

$\mathcal X_{2,n}$ の任意の滑らかなメンバーは、すべての $n>1$ でK安定である。特殊なメンバーを除く一般性の仮定はない。著者は $n\ge3$ を統一的に扱う議論によって、既知の高次元の結果に残っていた低次元の空白を埋める。

### Kähler–Einstein計量の存在（Corollary B）

同じ仮定で、すべての滑らかなメンバーはKähler–Einstein計量を持つ。これはTheorem Aと既知のYau–Tian–Donaldson対応を組み合わせた系であり、新しい計量の直接構成を主張するものではない。

## 証明の見取り図

任意の既約曲線 $C\subset X$ に対し、可能な限り超平面切断からなる旗を選び、最後の曲線 $Y$ が $C$ と少なくとも二点 $P,Q$ で交わるようにする。Abban–Zhuangの評価を、この複数点に沿う精密化された線形系の安定性閾値に帰着する。$P,Q$ を結ぶ直線が $X$ に含まれる場合や $C$ 自体が直線の場合は別に扱う。

さらに旗に付随する、Okounkov体と関係する凸体を構成し、閾値と評価式の各項を重心の座標に対応させる。適切な仮定の下で凸体の次元も下げ、実際に評価可能な形にする。Introductionはこの一般的方法の整備をSection 3、Theorem Aへの適用をSection 4に位置付ける。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.03311)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.03311v1)、Section 1, pp. 1–3。
- **Introduction中で言及された主要結果:** Theorem A、Corollary B。
- **論文構成の説明:** Section 1, pp. 2–3。
- **確認したarXivバージョン:** 2610.03311v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
