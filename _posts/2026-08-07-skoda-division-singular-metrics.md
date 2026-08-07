---
layout: paper
title: "Skoda division theorem on compact Kähler manifolds for line bundles with singular hermitian metrics"
title_ja: "特異 Hermite 計量付き直線束に対するコンパクト Kähler 多様体上の Skoda 除法定理"
authors: "Jaehoon Jeong"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
topic: several-complex-variables
arxiv_id: "2607.29669v2"
arxiv_url: "https://arxiv.org/abs/2607.29669"
arxiv_submitted: "2026-07-31"
arxiv_updated: "2026-08-03"
summary: >-
  特異 Hermite 計量をもつ直線束に対し、コンパクト Kähler 多様体上で大域的な Skoda $L^2$ 除法定理を証明する。曲率と可積分性の条件の下で除法の係数を明示的に評価し、乗数イデアルを用いた Siu 型除法と切断環の生成次数の有効上界を導く。
abstract_en: ""
summary_en: >-
  The paper develops a global Skoda division theorem on compact Kähler manifolds while allowing singular Hermitian metrics on the relevant line bundles. A curvature comparison and a weighted integrability condition lead to holomorphic divisors with an explicit norm bound. A second formulation assumes semipositive singular metrics. Applications include a multiplier-ideal division identity and an effective degree bound for generators of a section ring.
abstract_ja: >-
  コンパクト Kähler 多様体上の正則直線束に特異 Hermite 計量を許し、Skoda 型の大域的 $L^2$ 除法を証明する。計量の曲率を結ぶ自然な不等式と被除切断の可積分性から、除法係数となる正則切断の存在と明示的評価を得る。さらに Siu 型除法定理および切断環の生成次数に対する有効評価を導く。
abstract_source_url: "https://arxiv.org/abs/2607.29669"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.29669v2](https://arxiv.org/abs/2607.29669)
- **著者:** Jaehoon Jeong
- **初回投稿日:** 2026年7月31日
- **最終更新日:** 2026年8月3日
- **主分類・副分類:** math.CV（副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Skoda の除法定理は、正則関数 $f$ が生成元 $g_1,\dots,g_p$ の共通零点で十分に消えることを重み付き $L^2$ 条件で測り、$f=\sum h_kg_k$ と除せるだけでなく係数 $h_k$ のノルムも制御する。局所的な擬凸領域や滑らかな計量をもつ束では多くの展開があるが、この論文は特異 Hermite 計量をもつ直線束をコンパクト Kähler 多様体上で扱う。

第一の主定理は、二つの特異計量の曲率電流が $\sqrt{-1}\partial\bar\partial\psi\geq\alpha q\sqrt{-1}\partial\bar\partial\eta$ を満たすとき、被除切断の重み付き可積分性から大域的除法と明示的 $L^2$ 評価を与える。第二の形では両計量の半正値性を仮定し、応用しやすい次数表示に直す。

これを乗数イデアルに適用して、コンパクト Kähler 多様体上の Siu 型除法等式を得る。さらに、ある倍数の直線束が大域生成されるという仮定から、切断環の生成元に必要な次数を具体的に抑える。

## 背景と問題設定

Cartan の定理は局所的にイデアルへ属する正則関数の大域的所属を保証するが、係数の大きさは教えない。Skoda の方法は $L^2$ 評価によりこの量的情報を与える。コンパクト Kähler の特異計量では通常の畳み込みによる正則化が使えないため、閉正 $(1,1)$ 電流の Demailly 正則化と、解析集合の補集合上の完備 Kähler 計量が必要になる。

## 主結果

### 特異計量付き除法（Theorem 1.2）

$(X,\omega)$ を複素次元 $n\ge1$ のコンパクト Kähler 多様体、$F,E$ をそれぞれ特異計量 $e^{-\psi},e^{-\eta}$ をもつ直線束とする。$g_k\in H^0(X,E)$、$q=\min\{n,p-1\}$、有理数 $\alpha>1$ とし、

$$
\sqrt{-1}\partial\bar\partial\psi
\ge \alpha q\sqrt{-1}\partial\bar\partial\eta
$$

を仮定する。$f\in H^0(X,K_X+E+F)$ が

$$
\int_X\frac{|f|_\omega^2e^{-\psi-\eta}}
{(|g|^2e^{-\eta})^{\alpha q+1}}\,dV_\omega<\infty
$$

を満たせば、$h_k\in H^0(X,K_X+F)$ が存在して $\sum_kh_kg_k=f$ となり、

$$
\int_X\frac{|h|_\omega^2e^{-\psi}}
{(|g|^2e^{-\eta})^{\alpha q}}\,dV_\omega
\leq\left(2+\frac{4(\alpha+1)}{(\alpha-1)^2}\right)
\int_X\frac{|f|_\omega^2e^{-\psi-\eta}}
{(|g|^2e^{-\eta})^{\alpha q+1}}\,dV_\omega
$$

という定量評価を得る。

### 半正値版と応用（Theorem 1.3, Corollaries 1.4–1.5）

$e^{-\psi},e^{-\eta}$ がともに半正値曲率をもつ場合、$q\ge\min\{n,p-1\}$ と次数を調整した除法が成立し、定数は $8q^2+4q+2$ と明示される。乗数イデアル $\mathcal J_{k+1},\mathcal J_k$ に対しては

$$
H^0\!\left(X,((n+k+1)L+H+K_X)\otimes\mathcal J_{k+1}\right)
=\sum_{j=1}^pG_j\,H^0\!\left(X,((n+k)L+H+K_X)\otimes\mathcal J_k\right)
$$

を得る。また $aF$ と $bF-K_X$ が大域生成なら、切断環 $\bigoplus_{m\ge0}H^0(X,mF)$ は次数 $(n+2)a+b-1$ 以下で生成される。

## 証明の見取り図

Demailly 正則化で特異計量を解析集合の補集合上で滑らかに近似し、そこに完備 Kähler 計量と exhaustion を導入する。直接 $\bar\partial\xi=v$ を解く代わりに、誤差項を加えた $\bar\partial$-Laplacian 型方程式を解き、Bochner–Kodaira–Nakano 型不等式から一様評価を得る。三段階の弱収束で誤差を消し、$g\cdot\xi=0$ を保った解を構成した後、$L^2$ 有限性と Riemann 延長定理で全 $X$ へ延長する。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.29669](https://arxiv.org/abs/2607.29669)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.3; Corollaries 1.4, 1.5
- **論文構成の説明:** Contents and proof sketch, pp. 1, 4–5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
