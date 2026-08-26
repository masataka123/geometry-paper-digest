---
layout: paper
title: "A counterexample to Bruzzo's curve semistability conjecture for Higgs bundles"
title_ja: "Higgs束に対するBruzzoの曲線半安定性予想の反例"
authors: "Pengfei Huang"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this paper, we give a counterexample to Bruzzo conjecture on the curve semistability for Higgs bundles. Let $\Sigma$ be a very general smooth plane quintic curve and let $X=\Sigma^{(2)}$ be its second symmetric product. Starting from the tautological bundle $F=\mathcal{O}_\Sigma(1)^{[2]}$, we construct a rank four Higgs bundle $\mathcal{E}_s=(E_s,\theta_s)$ on $X$. Then, for every smooth projective curve $C$ and every morphism $f:C\to X$, the pullback Higgs bundle $f^*\mathcal{E}_s=(f^*E_s,f^*\theta_s)$ is semistable. However, on the other hand, $\mathrm{det}(E_s)\cong\mathcal{O}_X$ and $\int_Xc_2(E_s)=10$. Consequently, the discriminant of $E_s$ does not vanish, and $\mathcal{E}_s$ provides the desired counterexample.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - higgs-nonabelian-hodge
  - chern-classes
arxiv_id: "2608.22448v1"
arxiv_url: "https://arxiv.org/abs/2608.22448"
arxiv_submitted: "2026-08-23"
arxiv_updated: "2026-08-23"
summary: >-
  あらゆる射影曲線への引き戻しが半安定であるにもかかわらず、判別式が消えない階数4のHiggs束を構成し、Bruzzoの曲線半安定性予想に反例を与える。非常に一般の平面5次曲線の2次対称積上で、行列式が自明かつ第2 Chern数が10となる明示的構成である。
abstract_en: >-
  In this paper, we give a counterexample to Bruzzo conjecture on the curve semistability for Higgs bundles. Let $\Sigma$ be a very general smooth plane quintic curve and let $X=\Sigma^{(2)}$ be its second symmetric product. Starting from the tautological bundle $F=\mathcal{O}_\Sigma(1)^{[2]}$, we construct a rank four Higgs bundle $\mathcal{E}_s=(E_s,\theta_s)$ on $X$. Then, for every smooth projective curve $C$ and every morphism $f:C\to X$, the pullback Higgs bundle $f^*\mathcal{E}_s=(f^*E_s,f^*\theta_s)$ is semistable. However, on the other hand, $\mathrm{det}(E_s)\cong\mathcal{O}_X$ and $\int_Xc_2(E_s)=10$. Consequently, the discriminant of $E_s$ does not vanish, and $\mathcal{E}_s$ provides the desired counterexample.
summary_en: >-
  
abstract_ja: >-
  非常に一般の滑らかな平面5次曲線 $\Sigma$ の2次対称積 $X=\Sigma^{(2)}$ を考える。tautological bundle $F=\mathcal O_\Sigma(1)^{[2]}$ から階数4のHiggs束 $\mathcal E_s=(E_s,\theta_s)$ を構成する。この束は任意の滑らかな射影曲線 $C$ と任意の射 $f:C\to X$ に対して引き戻しが半安定である。一方、$\det(E_s)\cong\mathcal O_X$ かつ $\int_Xc_2(E_s)=10$ であり、判別式は消えないため、Bruzzo予想への反例となる。
abstract_source_url: "https://arxiv.org/abs/2608.22448"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.22448](https://arxiv.org/abs/2608.22448)
- **著者:** Pengfei Huang
- **初回投稿日:** 2026年8月23日
- **最終更新日:** 2026年8月23日
- **主分類・副分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな射影多様体上のHiggs束 $\mathcal E=(E,\theta)$ について、すべての滑らかな射影曲線からの引き戻しが半安定ならば、元の束の判別式は消えるか、という曲線判定問題がある。Bruzzo予想はこの条件を、ある偏極に関する半安定性と判別式消滅に同値だと主張していた。

本論文は階数4でこの逆向きが偽であることを示す。非常に一般の平面5次曲線 $\Sigma$ の対称積 $X=\Sigma^{(2)}$ 上に、任意の曲線射 $f:C\to X$ に対して $f^*\mathcal E_s$ が半安定となるHiggs束を構成する。

しかし基礎ベクトル束は行列式が自明で、第2 Chern数が10である。したがって判別式は消えず、曲線上の半安定性をすべて調べても高次元上のChern類情報を回復できないことが明示される。

構成ではtautological bundle、その双対との拡大、対称形式から得られるHiggs場を組み合わせる。曲線への引き戻しでHiggs場が接写像により縮約されるため、絶対的なHiggs Grassmannianのbase changeだけでは判定できない点も反例の機構に関わる。

## 背景と問題設定

階数 $r$ のHiggs束の判別式を

$$
\Delta(E)=c_2(E)-\frac{r-1}{2r}c_1(E)^2
$$

とする。予想された同値の一方は「ある偏極に関して半安定かつ $\Delta(E)=0$」、もう一方は「あらゆる $f:C\to X$ に対して縮約引き戻しHiggs束 $f^*\mathcal E$ が半安定」である。前者から後者は既知であり、階数2では逆も既知であった。

## 主結果

### 主定理（Theorem 1.2）

滑らかな複素射影曲面 $X$ と階数4のHiggs束 $\mathcal E_s=(E_s,\theta_s)$ で、すべての曲線への引き戻しが半安定だが判別式が消えないものが存在する。

より具体的には

$$
\det(E_s)\cong\mathcal O_X,\qquad \int_Xc_2(E_s)=10
$$

であり、$\Delta(E_s)\ne0$ が従う。構成の曲面は $X=\Sigma^{(2)}$、束は $F=\mathcal O_\Sigma(1)^{[2]}$ を用いる拡大

$$
0\longrightarrow F^*\longrightarrow E_s\longrightarrow F\longrightarrow0
$$

から得られる。Higgs場は $E_s\twoheadrightarrow F\to F^*\otimes\Omega_X^1\hookrightarrow E_s\otimes\Omega_X^1$ という合成である。

## 証明の見取り図

Introductionは、縮約対称射のrank dropを $\mathbb P(TX)$ 内のroot divisorで制御する方針を述べる。この因子は $\Sigma\times\Sigma$ と同型で、$X$ への射影は二重被覆である。generic rankが1の場合は曲線像を座標曲線または対角線へ絞り、次数評価と特定の階数2拡大束の半安定性を用いる。generic rankが2の場合は等方的直線だけが残り、拡大類と $\Sigma$ のJacobianの単純性によって不安定化部分層を排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.22448](https://arxiv.org/abs/2608.22448)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2
- **論文構成の説明:** Introduction末尾, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
