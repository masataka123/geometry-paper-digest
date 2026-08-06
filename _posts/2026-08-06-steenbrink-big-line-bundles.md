---
layout: paper
title: "Steenbrink vanishing theorem for big line bundles"
title_ja: "big 線束に対する Steenbrink 消滅定理"
authors: "Yuta Watanabe"
topic: several-complex-variables
arxiv_id: "2608.01519v1"
arxiv_url: "https://arxiv.org/abs/2608.01519"
arxiv_submitted: "2026-08-02"
arxiv_updated: "2026-08-02"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
summary: >-
  ample 線束に対する Steenbrink 消滅定理を、乗数イデアル層を組み込むことでコンパクト複素空間上の big 線束へ拡張する。特異 Hermitian 計量を適切に選び、対数的微分形式のコホモロジーが $p+q>n$ で消滅することを示し、nef and big の場合には乗数イデアルを式から除ける。
abstract_en: ""
summary_en: >-
  The paper extends a logarithmic Steenbrink-type vanishing statement from ample line bundles to big line bundles on compact complex spaces. After resolving the space and the algebraic singularities of a suitably chosen positively curved singular Hermitian metric, the vanishing involves logarithmic forms, the reduced exceptional divisor, and the associated multiplier ideal. A positivity result for a corrected rational line bundle is the main input. For nef and big line bundles, the metric can be chosen so that the multiplier ideal is trivial, yielding a cleaner analogue of Kawamata--Viehweg vanishing.
abstract_ja: >-
  複素射影多様体上の ample 線束に対する Steenbrink 消滅定理を、コンパクト複素空間上の big 線束へ一般化する。適切な正曲率特異 Hermitian 計量とその乗数イデアル層を用い、特異点解消上の対数的微分形式のコホモロジーが Kodaira--Akizuki--Nakano 型の次数範囲で消滅することを示す。nef and big の場合には乗数イデアル層が自明になる形も得られる。
abstract_source_url: "https://arxiv.org/abs/2608.01519"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01519v1](https://arxiv.org/abs/2608.01519v1)
- **著者:** Yuta Watanabe
- **初回投稿日:** 2026年8月2日
- **最終更新日:** 2026年8月2日（v1）
- **主分類・副分類:** Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ample 線束に対する Steenbrink 消滅定理を、乗数イデアル層を組み込むことで、純次元コンパクト複素空間上の big 線束へ拡張する。元の空間の projectivity は仮定せず、big 線束の存在から Moishezon 性を導く。

主定理では、解消上で正曲率 current と代数的特異点をもつ特異 Hermitian 計量を選び、さらにその特異集合を log resolution する。対数的微分形式、被約例外因子、引き戻した線束、乗数イデアルを組み合わせた cohomology が $p+q>n$ で消滅する。

解析的な中心入力は、乗数イデアルと因子的 Lelong 数の小数部分を用いて、解消上の補正された $\mathbb Q$-line bundle を positive にする定理である。nef and big の場合には乗数イデアルが自明になる計量を選べるため、より古典的な Steenbrink 型の式が得られる。

## 背景と問題設定

$n$ 次元コンパクト複素多様体と ample 線束 $A$ に対する Kodaira--Akizuki--Nakano 消滅は

$$
H^q(X,\Omega_X^p\otimes A)=0\qquad(p+q>n)
$$

を与える。big 線束へ移ると Ramanujam の反例のため、一般の微分形式について同じ全 bidegree 範囲をそのまま保つことはできない。一方、Steenbrink の定理は解消 $\mu:\widetilde X\to X$ と単純正規交差因子 $E=\mu^{-1}(\Sigma)$ を用い、$\Omega^p_{\widetilde X}(\log E)\otimes\mathcal O_{\widetilde X}(-E)$ という対数的対象で $p+q>n$ の消滅を実現する。

引き戻し $\mu^*A$ は ample とは限らないが big である。この観察から、非 ample な部分を multiplier ideal と blow-up で補正すれば Steenbrink の次数範囲を big 線束でも保てるか、という問題が生じる。

## 主結果

### big 線束に対する Steenbrink 型消滅（Theorem 1.3）

$X$ を純次元 $n$ のコンパクト複素空間、$\mu:\widehat X\to X$ を特異点解消、$L\to X$ を big な正則線束とする。このとき $X$ は Moishezon であり、$L$ 上に特異 Hermitian 計量 $h$ を選べる。$\mu^*h$ は $\widehat X\setminus\operatorname{Exc}(\mu)$ で代数的特異点をもち、$\widehat X$ 上で strictly positive curvature current をもつ。

$Z$ を $\mu^*h$ の特異集合、$\pi:\widetilde X\to\widehat X$ をその log resolution とし、$\widetilde\pi=\mu\circ\pi$ および $E=\pi^{-1}(Z)_{\mathrm{red}}$ とおく。このとき

$$
H^q\!\left(\widetilde X,
\Omega^p_{\widetilde X}(\log E)\otimes
\mathcal O_{\widetilde X}(-E)\otimes
\widetilde\pi^*L\otimes
\mathcal I(\widetilde\pi^*h)\right)=0
$$

が全ての $p+q>n$ で成り立つ。さらに $X$ が normal なら $h$ は singular positive に選べる。projectivity を要求しないことと、big 線束の非 ample 性を multiplier ideal に吸収して Steenbrink の全次数範囲を得ることが新規性である。

### 補正 $\mathbb Q$-line bundle の正値性（Theorem 1.4）

$X$ をコンパクト複素多様体、$L$ を big 線束とし、$h$ が代数的特異点と strictly positive curvature current をもつとする。特異集合 $Z$ の log resolution $\pi:\widetilde X\to X$ で

$$
\sum_{j\in J}E_j=\pi^{-1}(Z)_{\mathrm{red}}
$$

と書く。このとき

$$
\delta_j\in
[\upsilon_{E_j}(h)-\lfloor\upsilon_{E_j}(h)\rfloor,1)
\cap\mathbb Q\subset[0,1)
$$

を満たす非負有理数 $\delta_j$ が存在し、

$$
\pi^*L\otimes\mathcal I(\pi^*h)\otimes
\mathcal O_{\widetilde X}\!\left(-\sum_{j\in J}\delta_jE_j\right)
$$

は positive な $\mathbb Q$-line bundle になる。ここで $\upsilon_{E_j}(h)=\nu(\pi^*h,E_j)$ は $E_j$ に沿う divisorial Lelong number である。この係数範囲が Theorem 1.3 に正値性を供給する。

### nef and big の場合（Theorem 1.5）

Theorem 1.3 と同じ $X,\mu,L$ で $L$ が nef and big なら、$\mu^*L$ 上に代数的特異点と strictly positive curvature current をもち、

$$
\mathcal I(\widehat h)=\mathcal O_{\widehat X}
$$

となる計量 $\widehat h$ を選べる。その特異集合の log resolution に対し

$$
H^q\!\left(\widetilde X,
\Omega^p_{\widetilde X}(\log E)\otimes
\mathcal O_{\widetilde X}(-E)\otimes
\widetilde\pi^*L\right)=0
$$

が $p+q>n$ で成り立つ。これは multiplier ideal が式から消える Kawamata--Viehweg 型の帰結である。

## 証明の見取り図

Theorem 1.4 では refined Demailly approximation と strong openness を用い、multiplier ideal を保ったまま特異 Hermitian 計量を代数的特異点をもつものへ近似する。log resolution 後、divisorial Lelong number の整数部分を multiplier ideal が担い、その小数部分以上 $1$ 未満の有理係数 $\delta_j$ で例外因子を補正して positive な $\mathbb Q$-line bundle を作る。

Theorem 1.3 はこの正値性を、対数的 $L^2$ Dolbeault resolution と logarithmic vanishing theorem に入力して $p+q>n$ の消滅を得る。nef and big の場合は Lelong number を制御して multiplier ideal が自明な計量を選び、同じ枠組みから Theorem 1.5 を導く、という流れが Introduction に示されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01519v1](https://arxiv.org/abs/2608.01519v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.5（主結果は Theorems 1.3–1.5）
- **中心数式:** pp. 1–3（各消滅式、Theorem 1.4 の係数範囲と $\mathbb Q$-line bundle）
- **論文構成の説明:** Introduction, pp. 1–3（結果と方法の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
