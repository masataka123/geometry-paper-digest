---
layout: paper
title: "On the transcendental Yau-Tian-Donaldson Conjecture"
title_ja: "超越的Yau–Tian–Donaldson予想について"
authors: "Antonio Trusiani"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  We prove the (uniform) Yau-Tian-Donaldson Conjecture for transcendental Kähler classes in the case of trivial automorphisms. Indeed, we show the existence of Special Kähler Fujita Approximations of big cohomology classes associated to big test configurations, establishing the equivalence between the uniform $K$-stability and the strengthened version for models. More generally, we show that any big cohomology class on a compact Kähler manifold admits such Special Kähler Fujita Approximations: the volume and the analogue of the Riemann-Roch coefficient of the big class are both approximated by those of Kähler classes on higher compactifications.
topic: algebraic-geometry
tags:
  - k-stability
  - csck-extremal-kahler-metrics
  - positivity
  - pluripotential-theory
  - birational-geometry
arxiv_id: "2609.31089v1"
arxiv_url: "https://arxiv.org/abs/2609.31089"
arxiv_submitted: "2026-09-25"
arxiv_updated: "2026-09-25"
summary: >-
  自己同型群の恒等成分が自明なコンパクトKähler多様体について、超越的Kähler類にcscK計量が存在することと一様K安定性が同値であると証明する。核心は任意のbig cohomology classに対するSpecial Kähler Fujita近似であり、体積だけでなく第一Riemann–Roch係数も高いモデル上のKähler類で近似する。
abstract_en: ""
summary_en: >-
  This work establishes the uniform Yau–Tian–Donaldson correspondence for transcendental Kähler classes when the connected linear automorphism group is trivial. Its central construction is a special Kähler version of Fujita approximation for arbitrary big cohomology classes on compact Kähler manifolds. The approximation controls both volume and the canonical-class intersection that plays the role of the first Riemann–Roch coefficient. This control bridges ordinary uniform K-stability and the stronger stability notion for models, allowing existing variational results to yield a constant-scalar-curvature Kähler metric.
abstract_ja: >-
  自己同型が自明な場合に、超越的Kähler類に対する一様Yau–Tian–Donaldson予想を証明する。big test configurationに付随するbig cohomology classがSpecial Kähler Fujita近似をもつことを示し、一様K安定性とmodelに対する強化版の同値性を確立する。より一般に、コンパクトKähler多様体上の任意のbig cohomology classについて、その体積と第一Riemann–Roch係数に相当する量を、高いcompactification上のKähler類の対応する量で同時に近似する。
abstract_source_url: "https://arxiv.org/abs/2609.31089"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.31089](https://arxiv.org/abs/2609.31089)
- **著者:** Antonio Trusiani
- **初回投稿日:** 2026年9月25日
- **最終更新日:** 2026年9月25日
- **主分類・副分類:** math.AG, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yau–Tian–Donaldson対応は、偏極多様体上の標準計量の存在を代数的なK安定性で特徴づける。本論文は偏極が整数類でない超越的Kähler類を扱い、線型自己同型群の恒等成分が自明な場合に、一意な定スカラー曲率Kähler計量の存在と一様K安定性の同値を示す。

困難は、Kähler test configurationに対する通常の一様K安定性から、big test configurationも許す「modelに対する一様K安定性」へ移ることにある。著者は任意のbig cohomology classについて、体積に加えて標準類との交叉も収束するSpecial Kähler Fujita近似を構成し、この隔たりを埋める。

この近似は、特異性をもつ準多重劣調和関数と乗数イデアルを使って構成される。結論は自己同型が存在する場合を含まないが、Introductionは構成の同変版とweighted・特異設定への拡張を今後の方向として挙げる。

## 背景と問題設定

コンパクトKähler多様体 $X$ 上のKähler類 $\alpha$ を考える。整数類の場合には代数的Fujita近似や消滅定理を使えるが、超越的類では同じ道具がない。big class $\alpha$ の通常のKähler Fujita近似は、modification $p_k:Y_k\to X$ 上で

$$
p_k^*\alpha=\beta_k+\{E_k\},\qquad \beta_k^n\longrightarrow\operatorname{Vol}(\alpha)
$$

を満たす。YTDへの応用には、Donaldson–Futaki不変量に現れる第一Riemann–Roch係数も同時に制御する必要がある。

## 主結果

### 超越的YTD対応（Theorem A）

$\alpha$ をコンパクトKähler多様体 $X$ 上のKähler類とし、線型自己同型群の恒等成分が自明である場合を考える。このとき次は同値である。

1. $\alpha$ に一意なcscK計量が存在する。
2. $(X,\alpha)$ は一様K安定である。

存在から安定性への向きは既知であり、本論文の主要な貢献は一様K安定性から存在を導く向きである。自己同型群に関する仮定は両条件に必要であり、結論はこの範囲での超越的YTD予想を解決する。

### Special Kähler Fujita近似（Theorem B）

$\alpha$ を $n$ 次元コンパクトKähler多様体上のbig cohomology classとする。このとき、滑らかな中心に沿うblow-upの列として選べるmodification $p_k:Y_k\to X$、Kähler類 $\beta_k$、有効 $\mathbb R$-因子 $E_k$ が存在し、

$$
p_k^*\alpha=\beta_k+\{E_k\},
$$

$$
\beta_k^n\longrightarrow\operatorname{Vol}(\alpha),
\qquad
\beta_k^{n-1}\cdot K_{Y_k}\longrightarrow
\langle\alpha^{n-1}\rangle\cdot K_X
$$

を満たす。最後の収束が通常のFujita近似に加わる新しい条件であり、著者はこれをSpecialと呼ぶ。

## 証明の見取り図

big classのnef Fujita近似を、固定した $X$ 上の $\theta$-plurisubharmonic関数の特異性の類へ符号化する。最大の非正 $\theta$-psh関数 $V_\theta$ と非Kähler locusを支える因子 $E$ からイデアル

$$
\mathcal I_k=\mathcal J(kV_\theta)\cdot\mathcal O_X(-k_0E)
$$

を構成し、そのblow-upで近似を得る。乗数イデアルに関する包含を用いて相対標準因子の寄与が消えることを示し、体積と標準類交叉の同時収束を導く。

Theorem Bによりbig test configurationのDonaldson–Futaki不変量をKähler test configurationの不変量で近似できる。したがって通常の一様K安定性からmodelに対する一様K安定性が従い、既存の非Archimedean・変分理論と組み合わせてTheorem Aを得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.31089](https://arxiv.org/abs/2609.31089)
- **Introduction:** pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems A and B, Lemmas 3.2 and 3.4, Proposition 4.1
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
