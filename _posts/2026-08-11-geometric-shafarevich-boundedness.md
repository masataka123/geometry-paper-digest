---
layout: paper
title: "Geometric Shafarevich boundedness conjecture for families of polarized varieties"
title_ja: "偏極多様体族の幾何学的Shafarevich有界性予想"
authors: "Junchao Shentu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We establish the geometric Shafarevich boundedness conjecture for the moduli stack of stable minimal
  models, including in particular the moduli stack of KSB pairs.
topic: algebraic-geometry
tags:
  - minimal-model-program
  - vector-bundles-sheaves
  - moduli
  - higgs-nonabelian-hodge
  - fundamental-groups
arxiv_id: "2605.09847v1"
arxiv_url: "https://arxiv.org/abs/2605.09847"
arxiv_submitted: "2026-05-11"
arxiv_updated: "2026-05-11"
summary: >-
  安定極小モデルのモジュライスタックに対し、許容的な族が固定された底上で変形同値を除いて有限個になることを示す。対数Higgs層から得る定量的Arakelov型不等式が、Hom-stackの有限型性と高次元Shafarevich有界性を支える。
abstract_en: >-
  We establish the geometric Shafarevich boundedness conjecture for the moduli stack of stable minimal models, including in particular the moduli stack of KSB pairs.
summary_en: ""
abstract_ja: >-
  安定極小モデルのモジュライスタックについて幾何学的Shafarevich有界性予想を確立する。とくにKSB対のモジュライスタックを含み、適切なbirational admissibility条件の下で、固定した底上の族の変形有界性と対応するHom-stackの有限型性を得る。
abstract_source_url: "https://arxiv.org/abs/2605.09847"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.09847v1](https://arxiv.org/abs/2605.09847v1)
- **著者:** Junchao Shentu
- **初回投稿日:** 2026年5月11日
- **最終更新日:** 2026年5月11日（v1）
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

古典的な幾何学的Shafarevich予想は、固定された準射影曲線上の種数 $g>1$ の滑らかな射影曲線族が同型を除いて有限個であると主張する。高次元では非自明に変形する滑らかな族が存在するため、同型類の有限性は成り立たず、適切な主張は変形同値を除いた有界性となる。

本論文は、Birkarが構成した安定極小モデルの完全なDeligne--Mumfordスタック $\mathcal M_{\mathrm{slc}}(d,\Phi_c,\Gamma,\sigma)$ を舞台とする。特異な多様体だけをパラメータ化する成分もあるため、曲線族の「全てのfiberが滑らか」という条件に代わり、単純正規交差なstrict log birational modelをもつというstrict birational admissibilityを課す。

主結論は、底の特異 locus がコンパクトなら、strictly birationally admissibleな局所閉部分スタックへ写る族が変形同値を除いて有限個になること、そしてコンパクト化と境界を保つ写像のHom-stackが有限型になることである。曲線のモジュライでは古典的Shafarevich予想を回収し、KSBコンパクト化では滑らかな標準偏極多様体族の既知の有界性を含む。

証明を駆動するのは、モジュライ上のampleなHodge型 $\mathbb Q$-line bundleに関するclassifying morphismの次数を、底の対数標準因子で一様に抑えるArakelov型不等式である。admissibilityはこの不等式と有界性の双方に不可欠であり、単なる技術的仮定ではない。

## 背景と問題設定

高次元では、偏極Abel多様体や偏極Calabi--Yau多様体に非rigidな族が存在する。このため、固定底からモジュライへの写像を点ごとに有限とする代わりに、有限型の族で結ばれるという同値関係 $\simeq_{\mathcal S}$ を導入する。これはHom-stackが有限型であるという幾何学的定式化と対応する。

$\mathcal M_{\mathrm{slc}}(d,\Phi_c,\Gamma,\sigma)$ の粗モジュライ空間には、十分小さい $a>0$ と十分大きい $r$ に対し、直像の行列式から得るampleな $\mathbb Q$-line bundle $\lambda_{a,r}$ がある。classifying morphismの $\lambda_{a,r}$-次数を一様に抑えることが、写像族の有界性へつながる。

## 主結果

### 主定理1（Theorem 1.1：変形有界性）

$S$ を特異 locus $S_{\mathrm{sing}}$ がコンパクトな代数多様体、$\mathcal S\subset\mathcal M_{\mathrm{slc}}(d,\Phi_c,\Gamma,\sigma)$ をstrictly birationally admissibleな局所閉部分スタックとする。このとき

$$
\operatorname{Hom}(S,\mathcal S)/\simeq_{\mathcal S}
$$

は有限集合である。すなわち、$\mathcal S$-admissibleな安定極小モデル族は、有限型の媒介族を通じた変形同値を除けば有限個しかない。

### 主定理2（Theorem 1.2：Hom-stackの有界性）

$\bar S$ を $S$ のコンパクト化、$Z=\bar S\setminus S$ とし、$\partial\mathcal S=\overline{\mathcal S}\setminus\mathcal S$ とする。このとき境界を保つ写像のスタック

$$
\operatorname{Hom}\bigl((\bar S,Z),(\overline{\mathcal S},\partial\mathcal S)\bigr)
$$

は有限型である。Theorem 1.1を、classifying mapそのもののモジュライに持ち上げた結論である。

### 主定理3（Theorem 1.3：Arakelov不等式）

$f^o:(X^o,B^o),A^o\to S^o$ を滑らかな準射影 $n$ 次元多様体上のbirationally admissibleな安定極小モデル族とし、$\xi^o$ をclassifying morphismとする。$S^o\subset\bar S$ を単純正規交差境界 $D$ をもつ滑らかな射影コンパクト化とし、$\xi^o$ が $\xi:\bar S\to M_{\mathrm{slc}}$ に延長すると仮定する。

$K_{\bar S}+D$ がpseudo-effectiveで、$k$ が $\operatorname{ind}_\xi(\lambda_{a,r})$ で割り切れ、$\alpha$ がmovable curve classなら、Introductionに掲げられた評価は

$$
c_1(\xi^*\lambda_{a,r})\cdot\alpha
\leq \frac{lrd}{2}n^{klrd-1}(K_{\bar S}+D)\cdot\alpha+\frac{2}{k}D\cdot\alpha
$$

である。ここで $l=\operatorname{rank}(\Lambda_{a,r})$ である。さらに $K_{\bar S}+D$ がampleなら

$$
c_1(\xi^*\lambda_{a,r})\cdot(K_{\bar S}+D)^{n-1}
\leq \frac{lrd}{n}(K_{\bar S}+D)^n.
$$

とくに $\dim S=1$ では

$$
\deg\xi^*(\lambda_{a,r})\leq\frac{lrd}{2}\deg(K_{\bar S}+D).
$$

最後の曲線上の定数はsharpであり、主偏極Abel多様体のモジュライ中のShimura曲線を通る場合に等号が起こるとIntroductionは説明する。

## 証明の見取り図

まずadmissibleな安定族に、幾何学的起源をもつ混合Hodge構造の変動と、そのcanonical extensionから対数Higgs層を対応させる。直像層の行列式の冪を、$lr$ 重fiber product上の直像へalternating sumにより埋め込む。この $lr$ は従来の構成で必要なfiber product次数より小さく、定量的に鋭い評価を可能にする。

次にCampana--Păunの対数余接束の正値性とSimpsonの非可換Hodge理論を用い、Higgs場の反復を通じてHodge line bundleの次数を $K_{\bar S}+D$ で抑える。こうしてTheorem 1.3を得た後、Kovács--LieblichとOlssonの有界性の枠組みに入力し、Hom-stackの有限型性と変形同値類の有限性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.09847v1](https://arxiv.org/abs/2605.09847v1)
- **Introduction:** Section 1, pp. 1--5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** pp. 4--5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
