---
layout: paper
title: "Uniqueness and Stability of Monge--Ampère Potentials in Big Cohomology Classes"
title_ja: "bigコホモロジー類におけるMonge–Ampèreポテンシャルの一意性と安定性"
authors: "Quang-Tuan Dang, Lei Zhang, Bin Zhou"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we establish a stability estimate and a uniform estimate for the modulus of continuity of solutions to the degenerate complex Monge-Ampère equation in big cohomology classes. Consequently, we prove the uniqueness of solutions to complex Monge-Ampère mean field equations for a sufficiently small parameter.
topic: differential-geometry
tags:
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2609.00810v1"
arxiv_url: "https://arxiv.org/abs/2609.00810"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  bigコホモロジー類の退化複素Monge–Ampère方程式について、安定性評価とample locus上の一様な連続度評価を確立する。これを用い、klt型右辺をもつMonge–Ampère mean field方程式の解が十分小さい正のパラメータに対して一意であることを示す。
abstract_en: >-
  In this paper, we establish a stability estimate and a uniform estimate for the modulus of continuity of solutions to the degenerate complex Monge-Ampère equation in big cohomology classes. Consequently, we prove the uniqueness of solutions to complex Monge-Ampère mean field equations for a sufficiently small parameter.
summary_en: ""
abstract_ja: >-
  bigコホモロジー類における退化複素Monge–Ampère方程式の解に対し、安定性評価と連続度の一様評価を確立する。その帰結として、パラメータが十分小さい場合の複素Monge–Ampère mean field方程式の解の一意性を証明する。
abstract_source_url: "https://arxiv.org/abs/2609.00810"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.00810](https://arxiv.org/abs/2609.00810)
- **著者:** Quang-Tuan Dang, Lei Zhang, Bin Zhou
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

bigな $(1,1)$ コホモロジー類では、Kähler類の場合より強く退化する複素Monge–Ampère方程式が現れる。これは特異Kähler–Einstein計量や極小モデル・プログラムとの関係でも基本的な解析対象である。

第一の主結果は、解析的特異性をもつklt型密度に対するmean field方程式の一意性である。パラメータ $\lambda$ は十分小さい必要があり、Introductionは任意の正の $\lambda$ では成立しない反例も指摘する。

第二の主結果は、nef性を仮定せず、任意のbig類で解の連続度をample locus上に評価する。右辺密度の $L^1(\log L)^p$ 制御から、距離の対数の負冪による具体的な評価を得る。

両結果を支えるのは $L^\infty$–$L^1$ 安定性の精密化である。一意性だけでなく、退化計量の直径評価やGromov–Hausdorff極限に必要となる局所正則性へつながる点に意味がある。

## 背景と問題設定

$X$ をコンパクトKähler多様体、$\theta$ をbig類を表す閉実 $(1,1)$ 形式とする。twisted Kähler–Einstein方程式は

$$
(\theta+dd^c\varphi)^n=e^{-\lambda\varphi+\chi-\psi}\omega_X^n
$$

へ帰着される。$\chi-\psi$ には $\int_Xe^{\chi-\psi}\omega_X^n<\infty$ というklt条件を置く。

## 主結果

### mean field方程式の一意性（Theorem 1.1）

$\theta$ がbig類を表すとき、$X,\theta,\omega_X,n,p$ と $\|e^{\chi-\psi}\|_p$ に依存する $\lambda_0>0$ が存在する。すべての $0<\lambda<\lambda_0$ に対し、上の方程式はminimal singularitiesをもつ $\theta$-psh解をただ一つもつ。

### 連続度の一様評価（Theorem 1.2）

$$
(\theta+dd^c\varphi)^n=\mu=f\omega_X^n,\qquad \sup_X\varphi=0
$$

を考え、$p>n$ と $f\in L^1(\log L)^p$ を仮定する。任意の $U\Subset\operatorname{Amp}(\theta)$ と $0<\alpha<(p-n)/n$ に対して

$$
|\varphi(x)-\varphi(y)|\leq\frac{C}{|\log d(x,y)|^\alpha}
$$

が $x,y\in U$ で成り立つ。定数は指定された幾何データと密度のentropy boundだけに依存する。

## 証明の見取り図

Theorem 1.1はbig類における解の安定性評価を精密化して示す。Theorem 1.2ではMonge–Ampère capacityを直接用いる代わりに、劣位集合 $(\varphi<\psi-t)$ の $\mu$-測度が有限時間でゼロへ減少することを測る。正規化quasi-psh函数の弱compactness、quasi-psh envelope、補助函数を組み合わせ、nefでないbig形式にも適用できる形にする。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.00810](https://arxiv.org/abs/2609.00810)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
