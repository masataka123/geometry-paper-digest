---
layout: paper
title: "Local inequalities for $cD$ and $cE$ singularities"
title_ja: "$cD$・$cE$特異点に対する局所不等式"
authors: "Chi-Kang Chang, Jheng-Jie Chen, Takuzo Okada"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We obtain inequalities for isolated $cD_n, cE_6, cE_7$ and $cE_8$ singularities, analogues of the $4\mu^2/(n+1)$-inequality for isolated $cA_n$ singularity in \cite{KOP}. These inequalities are sharp. This enables us to prove the birational rigidity of certain families of Fano $3$-fold weighted hypersurfaces, which contain only terminal quotient singularities and one $cD_n$ singularity.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - fano-varieties
arxiv_id: "2608.28372v1"
arxiv_url: "https://arxiv.org/abs/2608.28372"
arxiv_submitted: "2026-08-28"
arxiv_updated: "2026-08-28"
summary: >-
  3次元終端 $cD_n,cE_6,cE_7,cE_8$ 特異点を非標準中心とする可動線形系の局所交点数に、型ごとの鋭い下界を与える。一般超平面切断と反転随伴でDu Val曲面特異点へ帰着し、有限被覆と滑らかな曲面上の不等式を通じて、$cD_n$ 点をもつFano 3次元重み付き超曲面の双有理剛性へ応用する。
abstract_en: >-
  We obtain inequalities for isolated $cD_n, cE_6, cE_7$ and $cE_8$ singularities, analogues of the $4\mu^2/(n+1)$-inequality for isolated $cA_n$ singularity in \cite{KOP}. These inequalities are sharp. This enables us to prove the birational rigidity of certain families of Fano $3$-fold weighted hypersurfaces, which contain only terminal quotient singularities and one $cD_n$ singularity.
summary_en: ""
abstract_ja: >-
  孤立 $cA_n$ 特異点に対する $4\mu^2/(n+1)$ 不等式の類似として、孤立 $cD_n,cE_6,cE_7,cE_8$ 特異点に対する不等式を得る。これらの不等式は鋭い。この結果を用い、終端商特異点と一つの $cD_n$ 特異点のみをもつFano 3次元重み付き超曲面のいくつかの族について双有理剛性を証明する。
abstract_source_url: "https://arxiv.org/abs/2608.28372"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.28372](https://arxiv.org/abs/2608.28372)
- **著者:** Chi-Kang Chang, Jheng-Jie Chen, Takuzo Okada
- **初回投稿日:** 2026年8月28日
- **最終更新日:** 2026年8月28日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Fano多様体の双有理剛性をNoether–Fano法で示す際、双有理非剛性を仮定すると、ある可動線形系 $\mathcal M\subset|-\mu K_X|$ と非標準中心が生じる。3次元の滑らかな点では、一般元二つの局所交点数を下から抑える $4\mu^2$ 不等式が、この中心を排除する基本的な道具となる。

先行研究はこの不等式を $cA_n$ 特異点へ拡張し、下界 $4\mu^2/(n+1)$ を得ていた。本論文はGorenstein終端3次元特異点の残る型である $cD_n,cE_6,cE_7,cE_8$ に対して型ごとの下界を証明し、いずれも鋭いことを述べる。

応用として、終端巡回商特異点に加えて所定の $cD_n$ 特異点をもつ指数1のFano 3次元重み付き超曲面の具体的な族が双有理剛性をもつことを示す。Introductionでは、その中に終端 $cD_4$ 点をもつ双有理剛性Fano 3次元多様体の最初の例が含まれると説明されている。

## 背景と問題設定

可動線形系 $\mathcal M$ に対して対 $(X,\mu^{-1}\mathcal M)$ が点 $P$ で非標準となるとき、一般元 $D_1,D_2\in\mathcal M$ の交わりの $P$ における重複度を評価する。$cA_n$ の場合の既知の評価は

$$
\operatorname{mult}_P(D_1\cdot D_2)>\frac{4}{n+1}\mu^2
$$

である。本論文の問題は、compound Du Val特異点の $cD,cE$ 型に対応する鋭い係数を決定することである。

## 主結果

### $cD$・$cE$型の局所不等式（Theorem 1.2）

$P\in X$ を3次元終端 $cD_n$ または $cE_n$ 特異点、$\mathcal M$ をCartier因子の可動線形系とし、$P$ が $(X,\mu^{-1}\mathcal M)$ の非標準中心であるとする。一般元 $D_1,D_2\in\mathcal M$ に対し

$$
\operatorname{mult}_P(D_1\cdot D_2)>
\begin{cases}
\dfrac{1}{n-2}\mu^2,&cD_n,\\
\dfrac{1}{6}\mu^2,&cE_6,\\
\dfrac{1}{12}\mu^2,&cE_7,\\
\dfrac{1}{30}\mu^2,&cE_8
\end{cases}
$$

が成り立つ。Introductionによれば、これらの下界はすべて最適である。

### Fano 3次元超曲面の双有理剛性（Theorem 1.3）

原論文のTable 1に挙げられた指数1のFano 3次元重み付き超曲面 $X$ を考える。非Gorenstein locusに沿って準滑らかであり、終端巡回商特異点と、表で指定された上限以下の型の終端 $cD_n$ 特異点のみをもつならば、$X$ は双有理剛性をもつ。対象となる族の完全な列挙と型の上限はTable 1を参照する必要があるため、ここではIntroductionの概略を越えて補わない。

## 証明の見取り図

$P$ を通る一般超平面切断 $S$ を取ると、$cD_n$ または $cE_n$ の3次元特異点から、それぞれ $D_n$ または $E_n$ 型のDu Val曲面特異点が得られる。反転随伴により、3次元の非標準性を曲面対 $(S,\mu^{-1}\mathcal M|_S)$ の非対数標準性へ移す。

Du Val曲面特異点を $\mathbb C^2/G$ と表示し、有限被覆 $\mathbb C^2\to\mathbb C^2/G$ へ線形系を引き戻す。滑らかな曲面上の $4\mu^2$ 不等式を適用し、被覆次数 $|G|$ で割ると下界 $4\mu^2/|G|$ を得る。二項正多面体群などの位数 $4(n-2),24,48,120$ を代入することで、Theorem 1.2の四つの係数が現れる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.28372](https://arxiv.org/abs/2608.28372)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
