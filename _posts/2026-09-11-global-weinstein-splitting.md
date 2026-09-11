---
layout: paper
title: "A global Weinstein splitting theorem for holomorphic Poisson manifolds"
title_ja: "正則Poisson多様体の大域Weinstein分解定理"
authors: "Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
  - math.SG
arxiv_abstract: >-
  We prove that if a compact Kähler Poisson manifold has a symplectic leaf with finite fundamental group, then after passing to a finite étale cover, it decomposes as the product of the universal cover of the leaf and some other Poisson manifold. As a step in the proof, we establish a special case of Beauville's conjecture on the structure of compact Kähler manifolds with split tangent bundle.
topic: algebraic-geometry
tags:
  - symplectic-contact-geometry
  - foliations
  - fundamental-groups
arxiv_id: "2102.12641v1"
arxiv_url: "https://arxiv.org/abs/2102.12641"
arxiv_submitted: "2021-02-25"
arxiv_updated: "2021-02-25"
summary: >-
  有限基本群をもつコンパクトシンプレクティック葉を含むコンパクトKähler Poisson多様体が、有限étale被覆後にその葉の普遍被覆と別のPoisson多様体との積へ分解することを示す。Poisson構造から接束の正則分解を作り、大域Reeb安定性とholonomy groupoidにより局所Weinstein分解を大域化する。
abstract_en: ""
summary_en: >-
  The paper globalizes Weinstein's local product decomposition under compact Kähler hypotheses. A compact symplectic leaf with finite fundamental group becomes a factor after a finite étale Poisson cover. The authors first extend the leaf's symplectic form to a global closed holomorphic two-form that splits the tangent bundle. A global stability argument for the resulting foliations then converts this infinitesimal splitting into a product decomposition, proving along the way a special case of Beauville's conjecture.
abstract_ja: >-
  コンパクトKähler Poisson多様体が有限基本群をもつコンパクトシンプレクティック葉を含むと仮定する。このとき有限étale Poisson被覆を取れば、多様体はその葉の普遍被覆と別のPoisson多様体との積に分解する。証明の中間段階として、分解された接束をもつコンパクトKähler多様体に関するBeauville予想の特別な場合も確立する。
abstract_source_url: "https://arxiv.org/abs/2102.12641"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2102.12641v1](https://arxiv.org/abs/2102.12641)
- **著者:** Stéphane Druel, Jorge Vitório Pereira, Brent Pym, Frédéric Touzet
- **初回投稿日:** 2021年2月25日
- **最終更新日:** 2021年2月25日
- **主分類・副分類:** math.AG（主分類）, math.DG, math.SG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Weinsteinの分解定理はPoisson多様体を各点の近傍でシンプレクティック因子と横断Poisson因子の積に分ける。大域的な積分解には葉のコンパクト性だけでは足りず、滑らかな圏では単連結な反例さえ存在する。

本論文は正則Poisson構造とコンパクトKähler性の下で強い大域化を得る。有限基本群をもつコンパクトシンプレクティック葉 $L$ があれば、有限étale Poisson射 $\widetilde L\times Y\to X$ が存在する。

第一段階では葉上の正則シンプレクティック形式を大域閉正則2形式へ延長し、Poisson構造と合わせて接束を二つの可積分部分束へ分解する。第二段階は、有限holonomyをもつコンパクト葉がある場合のBeauville予想の特別な場合を証明し、この接束分解を被覆空間の積分解へ持ち上げる。

## 背景と問題設定

正則Poisson bivector $\pi\in H^0(X,\wedge^2T_X)$ のanchor $\pi^\sharp:\Omega_X^1\to T_X$ の像はシンプレクティック葉層を定める。局所Weinstein定理に対し、問われるのは一つの葉を因子とする大域積がいつ存在するかである。

## 主結果

### 大域分解（Theorem 1.1）

コンパクトKähler Poisson多様体 $(X,\pi)$ が有限基本群をもつコンパクトシンプレクティック葉 $L$ を含めば、コンパクトKähler Poisson多様体 $Y$ と有限étale Poisson射

$$
\widetilde L\times Y\longrightarrow X
$$

が存在する。ここで $\widetilde L$ は $L$ の普遍被覆である。

### subcalibrationの存在（Theorem 1.2）

コンパクトシンプレクティック葉のシンプレクティック形式は、定rankの大域閉正則2形式 $\sigma$ へ延長できる。合成

$$
\theta=\pi^\sharp\sigma^\flat\in\operatorname{End}(T_X)
$$

は $\theta^2=\theta$ を満たし、$T_X=\operatorname{im}\theta\oplus\ker\theta$ を与える。

### 接束分解の大域化（Theorem 1.4）

$T_X=F\oplus G$ が可積分部分束の分解で、$F$ が有限holonomy群をもつコンパクト葉を含めば、$X$ の普遍被覆は積に分解する。さらに葉の基本群が有限で標準類が自明ならば、この分解は有限étale被覆の積分解から誘導される。

## 証明の見取り図

Hodge理論により葉のシンプレクティック形式を大域化し、subcalibrationから互いにPoisson直交な二つの可積分葉層を作る。正則葉層の大域Reeb安定性により全葉のコンパクト性と有限holonomyを得て、holonomy被覆を平坦Ehresmann接続をもつ束へまとめる。最後にコンパクトKähler多様体の自己同型群に関するLiebermanの構造理論でmonodromyを解析し、有限被覆上の積を導く。

## 原論文との対応

本記事はAbstractとIntroductionのTheorems 1.1, 1.2, 1.4およびCorollaries 1.5–1.8の説明に基づく。各仮定を外した反例とholonomy groupoidの詳細は原論文に委ねる。
